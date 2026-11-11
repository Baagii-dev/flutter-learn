import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import { quizzes } from './quizzes.js'

const files = import.meta.glob('./lessons/*.md', { query: '?raw', import: 'default', eager: true })

const MODULES = [
  { name: 'Dart хэлний үндэс', from: 1, to: 10 },
  { name: 'Flutter widget', from: 11, to: 20 },
  { name: 'State, Navigation, Төсөл', from: 21, to: 30 },
]

const lessons = Object.keys(files)
  .sort()
  .map((path) => {
    const raw = files[path]
    const num = parseInt(path.match(/(\d+)-/)[1], 10)
    const title = (raw.match(/^#\s+(.+)$/m) || [, path])[1]
    const body = raw.replace(/^#\s+.+\n/, '')
    return { num, title, body }
  })

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable */
  }
}

// rehype-highlight turns code into nested <span>s, so collect the plain text back
const nodeText = (node) => {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeText).join('')
  return nodeText(node.props?.children)
}

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false)
  const text = nodeText(children?.props?.children)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div className="codewrap">
      <button className="copy" onClick={copy}>
        {copied ? 'Хууллаа ✓' : 'Хуулах'}
      </button>
      <pre className={className}>{children}</pre>
    </div>
  )
}

// Options are rotated deterministically so the right answer is not always in the same spot
function Quiz({ num, picks, setPicks }) {
  const questions = quizzes[num]
  if (!questions) return null
  const answered = questions.filter((_, i) => picks[i] != null).length
  const score = questions.filter((q, i) => picks[i] === q.answer).length
  const finished = answered === questions.length

  return (
    <section className="quiz">
      <h2>Шалгалт</h2>
      {questions.map((q, qi) => {
        const shift = (num * 3 + qi) % q.options.length
        const order = q.options.map((_, k) => (k + shift) % q.options.length)
        const picked = picks[qi]
        return (
          <div className="q" key={qi}>
            <p className="qtext">
              {qi + 1}. {q.q}
            </p>
            {order.map((oi) => {
              let cls = 'opt'
              if (picked != null) {
                if (oi === q.answer) cls += ' right'
                else if (oi === picked) cls += ' wrong'
              }
              return (
                <button
                  key={oi}
                  className={cls}
                  disabled={picked != null}
                  onClick={() => setPicks((p) => ({ ...p, [qi]: oi }))}
                >
                  {q.options[oi]}
                </button>
              )
            })}
            {picked != null && (
              <p className="why">
                {picked === q.answer ? '✓ Зөв. ' : '✗ Буруу. '}
                {q.why}
              </p>
            )}
          </div>
        )
      })}
      {finished && (
        <div className="result">
          <strong>
            Үр дүн: {score} / {questions.length}
          </strong>
          <button onClick={() => setPicks({})}>Дахин оролдох</button>
        </div>
      )}
    </section>
  )
}

export default function App() {
  const [current, setCurrent] = useState(() => load('fs:current', 1))
  const [done, setDone] = useState(() => load('fs:done', []))
  const [menu, setMenu] = useState(false)
  const [quizPicks, setQuizPicks] = useState(() => load('fs:quiz', {}))

  useEffect(() => {
    save('fs:quiz', quizPicks)
  }, [quizPicks])
  useEffect(() => {
    save('fs:current', current)
    window.scrollTo(0, 0)
  }, [current])
  useEffect(() => {
    save('fs:done', done)
  }, [done])

  const lesson = useMemo(() => lessons.find((l) => l.num === current) || lessons[0], [current])
  const isDone = done.includes(lesson.num)
  const percent = Math.round((done.length / lessons.length) * 100)
  const toggleDone = () =>
    setDone((d) => (d.includes(lesson.num) ? d.filter((n) => n !== lesson.num) : [...d, lesson.num]))
  const go = (n) => {
    setCurrent(n)
    setMenu(false)
  }

  return (
    <div className="layout">
      <header className="topbar">
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Цэс">
          ☰
        </button>
        <strong>Flutter сурах</strong>
        <span className="pct">{percent}%</span>
      </header>

      <aside className={'sidebar' + (menu ? ' open' : '')}>
        <h1>Flutter сурах</h1>
        <div className="bar">
          <div style={{ width: percent + '%' }} />
        </div>
        <p className="small">
          {done.length} / {lessons.length} хичээл дууссан
        </p>
        {MODULES.map((m) => (
          <section key={m.name}>
            <h2>{m.name}</h2>
            {lessons
              .filter((l) => l.num >= m.from && l.num <= m.to)
              .map((l) => (
                <button
                  key={l.num}
                  className={'item' + (l.num === lesson.num ? ' active' : '')}
                  onClick={() => go(l.num)}
                >
                  <span className="check">{done.includes(l.num) ? '✓' : l.num}</span>
                  {l.title}
                </button>
              ))}
          </section>
        ))}
        <button
          className="reset"
          onClick={() => {
            if (window.confirm('Явцыг бүгдийг нь арилгах уу?')) setDone([])
          }}
        >
          Явцыг арилгах
        </button>
      </aside>

      <main className="content">
        <p className="crumb">
          Хичээл {lesson.num} / {lessons.length}
        </p>
        <h1>{lesson.title}</h1>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{ pre: CodeBlock }}
        >
          {lesson.body}
        </ReactMarkdown>

        <Quiz
          key={lesson.num}
          num={lesson.num}
          picks={quizPicks[lesson.num] || {}}
          setPicks={(update) =>
            setQuizPicks((all) => ({
              ...all,
              [lesson.num]: typeof update === 'function' ? update(all[lesson.num] || {}) : update,
            }))
          }
        />

        <div className="nav">
          <button disabled={lesson.num <= 1} onClick={() => go(lesson.num - 1)}>
            ← Өмнөх
          </button>
          <button className={'done' + (isDone ? ' on' : '')} onClick={toggleDone}>
            {isDone ? '✓ Дууссан' : 'Дууссан гэж тэмдэглэх'}
          </button>
          <button
            disabled={lesson.num >= lessons.length}
            onClick={() => {
              if (!isDone) setDone((d) => [...d, lesson.num])
              go(lesson.num + 1)
            }}
          >
            Дараах →
          </button>
        </div>
        <p className="small">
          Код туршихдаа{' '}
          <a href="https://dartpad.dev" target="_blank" rel="noreferrer">
            dartpad.dev
          </a>{' '}
          дээр хуулж ажиллуулаарай.
        </p>
      </main>
    </div>
  )
}
