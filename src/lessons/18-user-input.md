# Хэрэглэгчийн оролт

## TextField ба controller

```dart
class NameForm extends StatefulWidget {
  const NameForm({super.key});

  @override
  State<NameForm> createState() => _NameFormState();
}

class _NameFormState extends State<NameForm> {
  final _controller = TextEditingController();
  String _greeting = '';

  @override
  void dispose() {
    _controller.dispose(); // санах ойг чөлөөл
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: _controller,
          decoration: const InputDecoration(
            labelText: 'Нэр',
            hintText: 'Нэрээ бич',
            border: OutlineInputBorder(),
            prefixIcon: Icon(Icons.person),
          ),
        ),
        const SizedBox(height: 12),
        ElevatedButton(
          onPressed: () => setState(() => _greeting = 'Сайн уу, ${_controller.text}!'),
          child: const Text('Мэндлэх'),
        ),
        Text(_greeting),
      ],
    );
  }
}
```

Нууц үгийн талбарт `obscureText: true`, тоон гар зарахад `keyboardType: TextInputType.number`.

## Form ба validation

```dart
final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        decoration: const InputDecoration(labelText: 'И-мэйл'),
        validator: (value) {
          if (value == null || value.isEmpty) return 'Заавал бөглөнө';
          if (!value.contains('@')) return 'И-мэйл буруу байна';
          return null; // null = зөв
        },
      ),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate()) {
            print('Зөв!');
          }
        },
        child: const Text('Илгээх'),
      ),
    ],
  ),
)
```

## Switch, Checkbox, Slider

```dart
bool notify = true;
double volume = 0.5;

// build() дотор:
SwitchListTile(
  title: const Text('Мэдэгдэл'),
  value: notify,
  onChanged: (v) => setState(() => notify = v),
),
Checkbox(value: notify, onChanged: (v) => setState(() => notify = v!)),
Slider(value: volume, onChanged: (v) => setState(() => volume = v)),
```

## Даалгавар

Бүртгэлийн form хий: нэр (заавал), и-мэйл (`@` агуулсан), нууц үг (6+ тэмдэгт). Товч дарахад validate хийж, зөв бол `SnackBar` харуул:

```dart
ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(content: Text('Амжилттай!')),
);
```
