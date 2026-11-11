# Firebase танилцуулга

Өөрийн сервер бичихгүйгээр нэвтрэлт, мэдээллийн сан, файл хадгалалт авах хамгийн хурдан арга.

## Юу өгдөг вэ?

| Үйлчилгээ | Зориулалт |
|---|---|
| Authentication | Имэйл/нууц үг, Google нэвтрэлт |
| Cloud Firestore | Бодит цагийн NoSQL мэдээллийн сан |
| Storage | Зураг, файл |
| Cloud Messaging | Push мэдэгдэл |

## Тохируулах (нэг удаа)

1. [console.firebase.google.com](https://console.firebase.google.com) дээр төсөл үүсгэ.
2. FlutterFire CLI суулга:

```bash
dart pub global activate flutterfire_cli
flutterfire configure
```

3. Package-ууд нэм:

```bash
flutter pub add firebase_core firebase_auth cloud_firestore
```

4. `main()`-ийг өөрчил:

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MyApp());
}
```

## Бүртгүүлэх, нэвтрэх

```dart
final auth = FirebaseAuth.instance;

// Бүртгэл
await auth.createUserWithEmailAndPassword(email: email, password: password);

// Нэвтрэлт
try {
  await auth.signInWithEmailAndPassword(email: email, password: password);
} on FirebaseAuthException catch (e) {
  print(e.code); // 'user-not-found', 'wrong-password' ...
}

// Гарах
await auth.signOut();
```

Нэвтэрсэн эсэхийг шууд дагах:

```dart
StreamBuilder<User?>(
  stream: FirebaseAuth.instance.authStateChanges(),
  builder: (context, snapshot) {
    return snapshot.hasData ? const HomePage() : const LoginPage();
  },
)
```

## Firestore

```dart
final db = FirebaseFirestore.instance;

// Нэмэх
await db.collection('todos').add({'title': 'Сурах', 'done': false});

// Бодит цагийн жагсаалт
StreamBuilder<QuerySnapshot>(
  stream: db.collection('todos').snapshots(),
  builder: (context, snapshot) {
    if (!snapshot.hasData) return const CircularProgressIndicator();
    final docs = snapshot.data!.docs;
    return ListView(
      children: docs
          .map((d) => ListTile(title: Text(d['title'])))
          .toList(),
    );
  },
)

// Засах, устгах
await db.collection('todos').doc(id).update({'done': true});
await db.collection('todos').doc(id).delete();
```

## Аюулгүй байдал

Firestore-ын **Rules** хэсгийг заавал тохируул. Туршилтын горимоор үлдээвэл хэн ч уншиж бичнэ:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{id} {
      allow read, write: if request.auth != null;
    }
  }
}
```

> API key, нууц үгээ GitHub дээр бүү тавь. Firebase-ийн `firebase_options.dart` нь нууц биш боловч Rules-ээ зөв тавь.

## Даалгавар

Хичээл 25-ын Todo апп-ыг Firestore ашигладаг болго (`shared_preferences`-ийн оронд).
