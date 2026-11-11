# Dart дүгнэлт: жижиг төсөл

Одоо өмнө сурсан бүгдийг нэгтгэе: **Даалгаврын жагсаалт (Todo)**-ыг консол дээр хийнэ.

## Алхам 1: Класс

```dart
class Todo {
  final String title;
  bool done;

  Todo(this.title, {this.done = false});

  @override
  String toString() => '[${done ? 'x' : ' '}] $title';
}
```

## Алхам 2: Жагсаалт ба функц

```dart
final List<Todo> todos = [];

void addTodo(String title) {
  todos.add(Todo(title));
}

void complete(int index) {
  if (index >= 0 && index < todos.length) {
    todos[index].done = true;
  }
}

void showAll() {
  for (int i = 0; i < todos.length; i++) {
    print('${i + 1}. ${todos[i]}');
  }
}
```

## Алхам 3: Ажиллуулах

```dart
void main() {
  addTodo('Dart сурах');
  addTodo('Flutter суулгах');
  addTodo('Анхны апп хийх');

  complete(0);
  showAll();

  final left = todos.where((t) => !t.done).length;
  print('Үлдсэн: $left');
}
```

Гаралт:

```
1. [x] Dart сурах
2. [ ] Flutter суулгах
3. [ ] Анхны апп хийх
Үлдсэн: 2
```

## Даалгавар (өөрөө хий)

1. `removeTodo(int index)` функц нэм.
2. `Todo`-д `priority` (`int`, 1-3) талбар нэмээд `showAll`-д эрэмбэлж харуул (`todos.sort((a, b) => a.priority.compareTo(b.priority))`).
3. Дуусаагүй даалгавруудыг л харуулдаг `showPending()` бич.

> Энэ хичээлийг дээрх жишээг **харахгүйгээр** өөрөө хийж чадвал Dart-ын үндсийг эзэмшлээ гэсэн үг. Дараагийн хичээлээс Flutter эхэлнэ!
