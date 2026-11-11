# Төсөл 2: Todo апп

Хичээл 17-24-ийн мэдлэгээ нэгтгэн бүрэн Todo апп хийнэ.

## Шаардлага

1. Даалгавар нэмэх (`TextField` + товч)
2. Жагсаалтаар харуулах (`ListView.builder`)
3. Checkbox-оор дуусгах (дууссан бол текст дундуур зураастай)
4. Шудрах (swipe) эсвэл ❌ товчоор устгах
5. Апп хаагдаад нээгдэхэд **өгөгдөл хадгалагдсан** байх
6. Дээр нь "3 / 5 дууссан" гэж харуулах

## Загвар (model)

```dart
class Todo {
  final String id;
  String title;
  bool done;

  Todo({required this.id, required this.title, this.done = false});

  Map<String, dynamic> toJson() => {'id': id, 'title': title, 'done': done};

  factory Todo.fromJson(Map<String, dynamic> json) => Todo(
        id: json['id'] as String,
        title: json['title'] as String,
        done: json['done'] as bool,
      );
}
```

## State (Provider)

```dart
class TodoModel extends ChangeNotifier {
  final List<Todo> _todos = [];
  List<Todo> get todos => List.unmodifiable(_todos);
  int get doneCount => _todos.where((t) => t.done).length;

  Future<void> load() async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('todos');
    if (raw != null) {
      final list = jsonDecode(raw) as List;
      _todos
        ..clear()
        ..addAll(list.map((e) => Todo.fromJson(e as Map<String, dynamic>)));
      notifyListeners();
    }
  }

  Future<void> _save() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('todos', jsonEncode(_todos.map((t) => t.toJson()).toList()));
  }

  void add(String title) {
    _todos.add(Todo(id: DateTime.now().toIso8601String(), title: title));
    notifyListeners();
    _save();
  }

  void toggle(Todo t) {
    t.done = !t.done;
    notifyListeners();
    _save();
  }

  void remove(Todo t) {
    _todos.remove(t);
    notifyListeners();
    _save();
  }
}
```

## UI-ийн гол хэсэг

```dart
ListView.builder(
  itemCount: model.todos.length,
  itemBuilder: (context, i) {
    final t = model.todos[i];
    return Dismissible(
      key: ValueKey(t.id),
      onDismissed: (_) => context.read<TodoModel>().remove(t),
      background: Container(color: Colors.red),
      child: CheckboxListTile(
        value: t.done,
        onChanged: (_) => context.read<TodoModel>().toggle(t),
        title: Text(
          t.title,
          style: TextStyle(
            decoration: t.done ? TextDecoration.lineThrough : null,
          ),
        ),
      ),
    );
  },
)
```

`main()` дотор өгөгдлийг ачаална:

```dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => TodoModel()..load(),
      child: const MyApp(),
    ),
  );
}
```

## Таны ажил

Дээрх хэсгүүдийг нэгтгэж `HomePage`-ийг **өөрөө** бич. Дараа нь:

- Шүүлтүүр нэм: Бүгд / Дууссан / Дуусаагүй
- Даалгаврын нэрийг дарж засах боломж нэм

> Энэ апп-ыг GitHub дээр тавьж portfolio-доо нэмж болно.
