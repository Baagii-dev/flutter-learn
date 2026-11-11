# Theme ба Material 3

Өнгө, фонтыг widget бүр дээр тус тусад нь зааж өгөхгүй, **Theme-д нэг удаа** тохируулна.

## ThemeData

```dart
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.teal),
    appBarTheme: const AppBarTheme(centerTitle: true),
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.teal,
      brightness: Brightness.dark,
    ),
  ),
  themeMode: ThemeMode.system, // системийн тохиргоог дага
  home: const HomePage(),
)
```

`ColorScheme.fromSeed` нь нэг өнгөөс бүх уялдаатай палитр үүсгэнэ.

## Theme-ийг ашиглах

```dart
Container(
  color: Theme.of(context).colorScheme.primaryContainer,
  child: Text(
    'Сайн уу',
    style: Theme.of(context).textTheme.titleLarge,
  ),
)
```

Яагаад hardcode `Colors.blue` гэж бичихгүй вэ? Dark mode, өнгө солих үед бүх газар автоматаар зөв болно.

## Scaffold-ийн бүрэн бүтэц

```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Нүүр'),
    actions: [
      IconButton(onPressed: () {}, icon: const Icon(Icons.settings)),
    ],
  ),
  drawer: const Drawer(child: Center(child: Text('Цэс'))),
  body: const Center(child: Text('Агуулга')),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: const Icon(Icons.add),
  ),
  bottomNavigationBar: NavigationBar(
    selectedIndex: 0,
    onDestinationSelected: (i) {},
    destinations: const [
      NavigationDestination(icon: Icon(Icons.home), label: 'Нүүр'),
      NavigationDestination(icon: Icon(Icons.person), label: 'Профайл'),
    ],
  ),
)
```

## Хариу үйлдэл (responsive)

```dart
final width = MediaQuery.of(context).size.width;
final columns = width > 600 ? 4 : 2;

// эсвэл
LayoutBuilder(builder: (context, constraints) {
  return constraints.maxWidth > 600 ? WideLayout() : NarrowLayout();
})
```

## Даалгавар

Өмнөх апп-даа `ColorScheme.fromSeed`-ээр өөр өнгө сонгоод, `themeMode: ThemeMode.dark` болгож харьцуул. Hardcode өнгөнүүдийг `Theme.of(context)`-аар сольж үз.
