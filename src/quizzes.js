// Quiz per lesson: { q, options, answer (index), why }
const Q = (q, options, answer, why) => ({ q, options, answer, why })

export const quizzes = {
  1: [
    Q('Dart програм аль функцээс эхэлдэг вэ?', ['start()', 'main()', 'run()', 'init()'], 1, 'main() нь програмын эхлэх цэг.'),
    Q('Flutter-ийн програмчлалын хэл аль нь вэ?', ['Kotlin', 'Swift', 'Dart', 'Java'], 2, 'Flutter код Dart хэлээр бичигдэнэ.'),
    Q('Dart-д мөр бүрийн төгсгөлд юу тавих вэ?', [':', ';', '.', ','], 1, 'Мөр бүр ; (цэгтэй таслал)-аар төгснө.'),
  ],
  2: [
    Q('Бутархай тоог ямар төрөлд хадгалах вэ?', ['int', 'bool', 'double', 'String'], 2, 'double нь бутархай тоо.'),
    Q('Нэг удаа оноогоод дахин өөрчилж болдоггүй хувьсагчийг юугаар зарлах вэ?', ['var', 'final', 'late', 'dynamic'], 1, 'final нэг л удаа онооно.'),
    Q("'Нас: $age' гэж бичвэл юу болох вэ?", ['Яг "Нас: $age" гэж хэвлэнэ', 'age хувьсагчийн утгыг оруулна', 'Алдаа гарна', 'Нас: 0 гэж хэвлэнэ'], 1, '$ нь текст дотор хувьсагчийн утгыг оруулна (interpolation).'),
  ],
  3: [
    Q('10 ~/ 3 нь юу вэ?', ['3.33', '3', '1', '30'], 1, '~/ нь бүхэл хуваалт, үр дүн нь 3.'),
    Q('a > 1 && a < 10 нөхцөл хэзээ үнэн вэ?', ['a нь 1-ээс бага үед', 'Зөвхөн аль нэг нь үнэн үед', 'Хоёулаа үнэн үед', 'a нь 10 үед'], 2, '&& нь "бөгөөд", хоёр нөхцөл хоёулаа үнэн байх ёстой.'),
    Q('Гурвалсан оператор аль нь вэ?', ['a ? b : c', 'if a then b', 'a => b', 'a ?? b'], 0, 'нөхцөл ? үнэн_утга : худал_утга.'),
  ],
  4: [
    Q('Давталтын нэг алхмыг алгасахад юу хэрэглэх вэ?', ['break', 'continue', 'return', 'skip'], 1, 'continue нь тухайн алхмыг алгасаж дараагийнх руу шилжинэ.'),
    Q('Дор хаяж нэг удаа заавал ажиллах давталт аль нь вэ?', ['for', 'while', 'do-while', 'foreach'], 2, 'do-while нөхцөлөө дараа нь шалгадаг.'),
    Q('for (int i = 1; i <= 5; i++) давталт хэд удаа ажиллах вэ?', ['4', '5', '6', 'Төгсгөлгүй'], 1, 'i нь 1, 2, 3, 4, 5 гэсэн 5 утга авна.'),
  ],
  5: [
    Q('Нэрлэсэн параметрийг ямар хаалтанд бичих вэ?', ['( )', '[ ]', '{ }', '< >'], 2, '{ } дотор бичсэн параметрийг нэрээр нь дамжуулна.'),
    Q('Нэг илэрхийлэлтэй функцийг богино бичих тэмдэг аль нь вэ?', ['->', '=>', '::', '=='], 1, 'int square(int x) => x * x;'),
    Q('Нэрлэсэн параметрийг заавал өгөх ёстой болгох түлхүүр үг?', ['final', 'must', 'required', 'needed'], 2, 'required үгийг ашиглана.'),
  ],
  6: [
    Q('List-ийн бүх элементийг өөр утгад хөрвүүлж шинэ жагсаалт үүсгэх арга?', ['where', 'map', 'add', 'fold'], 1, 'map нь элемент бүрт функц хэрэглэнэ.'),
    Q('Set-ийн онцлог юу вэ?', ['Эрэмбэтэй', 'Давхардал агуулахгүй', 'Түлхүүртэй', 'Зөвхөн тоо агуулна'], 1, 'Set-д ижил утга зөвхөн нэг удаа орно.'),
    Q("scores['Болд'] гэж унших нь аль цуглуулгад хамаарах вэ?", ['List', 'Set', 'Map', 'Queue'], 2, 'Map нь түлхүүр: утга хэлбэртэй.'),
  ],
  7: [
    Q('Объект үүсгэх үед автоматаар ажилладаг зүйл юу вэ?', ['getter', 'constructor', 'extends', 'override'], 1, 'Constructor нь объектыг анхны утгаар нь бэлддэг.'),
    Q('class MyApp extends StatelessWidget дахь extends юу гэсэн үг вэ?', ['Импортлох', 'Удамших', 'Устгах', 'Хуулах'], 1, 'extends нь өөр классаас удамшихыг заана.'),
    Q('Эцэг классын method-ийг хүүхэд класст дахин тодорхойлоход аль тэмдэглэгээг ашиглах вэ?', ['@new', '@override', '@super', '@copy'], 1, '@override тэмдэглэгээг ашиглана.'),
  ],
  8: [
    Q('String? name гэсэн зарлалт юу гэсэн үг вэ?', ['name нь заавал null', 'name нь null байж болно', 'name нь тоо', 'name нь тогтмол'], 1, '? нь null байж болохыг заана.'),
    Q("name ?? 'Зочин' юу хийх вэ?", ['name null бол Зочин-ийг өгнө', 'Үргэлж Зочин-ийг өгнө', 'name-ийг устгана', 'Алдаа өгнө'], 0, '?? нь null үед анхдагч утга өгнө.'),
    Q('Хувьсагч null байхад ! оператор хэрэглэвэл юу болох вэ?', ['Анхдагч утга авна', 'Юу ч болохгүй', 'Програм алдаатай унана', 'Автоматаар засагдана'], 2, '! нь "null биш" гэж амлаж байгаа тул null байвал runtime алдаа гарна.'),
  ],
  9: [
    Q('Future дуустал хүлээхэд аль түлхүүр үгийг ашиглах вэ?', ['wait', 'await', 'then', 'pause'], 1, 'await-ыг async функц дотор ашиглана.'),
    Q('await ашиглах функцийг юугаар тэмдэглэх вэ?', ['future', 'sync', 'async', 'defer'], 2, 'Функцийн толгойд async гэж бичнэ.'),
    Q('Stream ба Future-ийн гол ялгаа юу вэ?', ['Stream нэг утга, Future олон утга өгнө', 'Stream олон утга, Future нэг утга өгнө', 'Ялгаагүй', 'Stream зөвхөн String'], 1, 'Future нэг утга, Stream цаг хугацаанд олон утга өгнө.'),
  ],
  10: [
    Q('todos.where((t) => !t.done) юу буцаах вэ?', ['Дууссан даалгавруудыг', 'Дуусаагүй даалгавруудыг', 'Бүх даалгаврыг', 'Тоог'], 1, '!t.done нь дуусаагүйг шүүнэ.'),
    Q('Класс дотор утгыг constructor-оор шууд онооход аль хэлбэр вэ?', ['Todo(title) { }', 'Todo(this.title)', 'Todo = title', 'new Todo.title'], 1, 'this.title нь параметрийг шууд талбарт онооно.'),
    Q('Жагсаалтаас 3-аар хуваагддаг тоог шүүх зөв арга?', ['list.map(n % 3)', 'list.where((n) => n % 3 == 0)', 'list.add(n % 3)', 'list.sort(3)'], 1, 'where нь нөхцөлд таарсан элементүүдийг шүүнэ.'),
  ],
  11: [
    Q('Flutter апп-ыг ажиллуулах команд аль нь вэ?', ['flutter start', 'flutter run', 'dart go', 'flutter play'], 1, 'flutter run.'),
    Q('Таны код голдуу аль файлд бичигдэх вэ?', ['pubspec.yaml', 'android/app.java', 'lib/main.dart', 'test/'], 2, 'lib/main.dart нь гол файл.'),
    Q('Hot reload (r) юу хийдэг вэ?', ['Апп-ыг бүрэн дахин эхлүүлж state-ийг арилгана', 'Кодын өөрчлөлтийг state-ийг хадгалан шууд харуулна', 'Апп-ыг зогсооно', 'Package суулгана'], 1, 'Hot reload нь state-ийг хадгалан шууд шинэчилнэ.'),
  ],
  12: [
    Q('Flutter-д UI юунаас бүтэх вэ?', ['XML файл', 'Widget-үүдийн мод', 'HTML', 'Зөвхөн зураг'], 1, 'Бүх зүйл widget, тэд мод үүсгэнэ.'),
    Q('UI-г хэрхэн харагдахыг тодорхойлдог method?', ['init()', 'draw()', 'build()', 'render()'], 2, 'Widget бүр build() дотор өөрийгөө тодорхойлно.'),
    Q('Нэг хүүхэдтэй widget аль параметрээр хүүхдээ авдаг вэ?', ['children', 'child', 'body', 'items'], 1, 'Center, Padding гэх мэт нэг хүүхэдтэй widget child авна.'),
  ],
  13: [
    Q('Текстийн хэмжээ, өнгийг тохируулах класс?', ['TextTheme', 'TextStyle', 'TextFormat', 'FontStyle'], 1, 'Text(style: TextStyle(...)).'),
    Q('Товчийг идэвхгүй болгохын тулд onPressed-д юу өгөх вэ?', ['0', 'false', 'null', '() {}'], 2, 'onPressed: null бол товч идэвхгүй.'),
    Q('Төслийн дотор байгаа зургийг харуулахын өмнө юуг тохируулах ёстой вэ?', ['pubspec.yaml-д assets', 'main.dart-д import', 'AndroidManifest', 'Юу ч шаардлагагүй'], 0, 'Зургийг pubspec.yaml-ын assets хэсэгт бүртгэнэ.'),
  ],
  14: [
    Q('Column-ийн үндсэн (main) тэнхлэг аль нь вэ?', ['Хэвтээ', 'Босоо', 'Диагональ', 'Тэнхлэггүй'], 1, 'Column босоо, түүний main axis босоо.'),
    Q('Widget хооронд 16 пикселийн босоо зай үүсгэх арга?', ['Space(16)', 'SizedBox(height: 16)', 'Gap(16)', 'Margin(16)'], 1, 'SizedBox(height: 16) хоосон зай үүсгэнэ.'),
    Q('Row дотор элементүүдийг хоорондоо тэнцүү зайтай, үзүүрт зайгүй байрлуулах утга?', ['spaceEvenly', 'center', 'spaceBetween', 'end'], 2, 'spaceBetween нь үзүүрт зай үлдээхгүй.'),
  ],
  15: [
    Q('Container-д өнгө, хүрээ, булан тохируулахад аль параметрийг ашиглах вэ?', ['style', 'decoration', 'theme', 'design'], 1, 'BoxDecoration-г decoration-д өгнө.'),
    Q('Row дотор үлдсэн зайг дүүргэх widget аль нь вэ?', ['Spacer-гүй', 'Expanded', 'Center', 'Align'], 1, 'Expanded нь үлдсэн зайг дүүргэнэ.'),
    Q('Хоёр талдаа 20, дээр доороо 10 зай өгөх зөв арга?', ['EdgeInsets.all(20)', 'EdgeInsets.symmetric(horizontal: 20, vertical: 10)', 'EdgeInsets.only(20, 10)', 'EdgeInsets(20, 10)'], 1, 'symmetric нь хэвтээ, босоо зайг тус тусад нь өгнө.'),
  ],
  16: [
    Q('Олон мянган элементтэй жагсаалтад аль ListView-г хэрэглэх вэ?', ['ListView(children: ...)', 'ListView.builder', 'Column', 'Row'], 1, 'builder нь зөвхөн харагдаж буй элементийг зурдаг.'),
    Q('Widget-үүдийг бие биен дээр давхарлахад?', ['Column', 'Row', 'Stack', 'Wrap'], 2, 'Stack нь давхарлана.'),
    Q('GridView.count-д баганын тоог аль параметр тодорхойлох вэ?', ['columns', 'crossAxisCount', 'gridSize', 'rowCount'], 1, 'crossAxisCount нь хөндлөн тэнхлэгийн тоо (багана).'),
  ],
  17: [
    Q('UI-г шинэчлэхийн тулд state өөрчлөхдөө юуг дуудах вэ?', ['update()', 'refresh()', 'setState()', 'rebuild()'], 2, 'setState нь build()-ийг дахин дуудуулна.'),
    Q('Хэрэглэгч товчлоход тоо нэмэгддэг widget аль төрөл вэ?', ['StatelessWidget', 'StatefulWidget', 'Аль нь ч болно', 'InheritedWidget'], 1, 'Өөрчлөгддөг state-тэй тул StatefulWidget.'),
    Q('count++ -г setState-гүйгээр дуудвал юу болох вэ?', ['UI шууд шинэчлэгдэнэ', 'Утга өөрчлөгдөнө, гэхдээ UI шинэчлэгдэхгүй', 'Алдаа гарна', 'Апп унтарна'], 1, 'Flutter build()-ийг дахин дуудахгүй тул дэлгэц хуучин хэвээр.'),
  ],
  18: [
    Q('TextField-ийн утгыг уншихад юу хэрэглэх вэ?', ['TextEditingController', 'TextReader', 'InputValue', 'FieldKey'], 0, 'controller.text нь утгыг өгнө.'),
    Q('TextFormField-ийн validator зөв бол юу буцаах ёстой вэ?', ['true', 'null', "''", 'ok'], 1, 'Алдаагүй бол null, алдаатай бол алдааны текст буцаана.'),
    Q('Controller-ийг яагаад dispose() дотор устгах вэ?', ['Заавал биш', 'Санах ойг чөлөөлөхийн тулд', 'Өнгө солихын тулд', 'Хурдан ажиллуулахын тулд'], 1, 'Санах ойн алдагдлаас сэргийлнэ.'),
  ],
  19: [
    Q('Нэг seed өнгөөс бүтэн палитр үүсгэх?', ['ColorScheme.fromSeed', 'Colors.auto', 'Theme.generate', 'ColorPalette.make'], 0, 'ColorScheme.fromSeed(seedColor: ...).'),
    Q('Theme-ээс өнгө авах зөв арга?', ['Theme.of(context).colorScheme.primary', 'Colors.theme.primary', 'context.color', 'Theme.primary'], 0, 'Theme.of(context) ашиглана.'),
    Q('Системийн dark/light тохиргоог дагах themeMode?', ['ThemeMode.auto', 'ThemeMode.system', 'ThemeMode.device', 'ThemeMode.default'], 1, 'ThemeMode.system.'),
  ],
  20: [
    Q('Том widget-ийг юу хийвэл зөв вэ?', ['Бүгдийг нэг build() дотор бичих', 'Жижиг widget-үүдэд хуваах', 'Хуулж давтах', 'Comment болгох'], 1, 'Жижиг widget-үүд нь уншихад хялбар, дахин ашиглагдана.'),
    Q('"Дагах" товч дарахад текст нь солигдохын тулд аль widget хэрэгтэй вэ?', ['StatelessWidget', 'StatefulWidget', 'Container', 'SizedBox'], 1, 'Өөрчлөгдөх state хэрэгтэй.'),
    Q('Дугуй профайл зургийг ихэвчлэн ямар widget-ээр хийх вэ?', ['CircleAvatar', 'RoundImage', 'Ellipse', 'ProfileBox'], 0, 'CircleAvatar.'),
  ],
  21: [
    Q('Шинэ хуудас руу шилжих method?', ['Navigator.go', 'Navigator.push', 'Navigator.open', 'Navigator.next'], 1, 'Navigator.push(context, MaterialPageRoute(...)).'),
    Q('Өмнөх хуудас руу буцах method?', ['Navigator.back', 'Navigator.pop', 'Navigator.close', 'Navigator.exit'], 1, 'Navigator.pop(context).'),
    Q('Хуудас руу өгөгдөл дамжуулах хамгийн энгийн арга?', ['Global хувьсагч', 'Constructor параметр', 'Файл бичих', 'print хийх'], 1, 'DetailPage(title: ...) гэж constructor-оор дамжуулна.'),
  ],
  22: [
    Q('Package нэмэх команд?', ['flutter pub add http', 'dart install http', 'flutter get http', 'npm i http'], 0, 'flutter pub add <нэр>.'),
    Q('Flutter package-ийн албан ёсны сан аль нь вэ?', ['npmjs.com', 'pub.dev', 'maven.org', 'github.com/flutter'], 1, 'pub.dev.'),
    Q('Package сонгохдоо юуг шалгах вэ?', ['Зөвхөн нэр', 'Likes, сүүлийн шинэчлэл, платформ дэмжлэг', 'Лого', 'Файлын хэмжээ'], 1, 'Нийтлэг байдал, шинэчлэл, дэмжлэгийг шалгана.'),
  ],
  23: [
    Q('build() дотор өөрчлөлтийг харуулахад аль нь зөв бэ?', ['context.read', 'context.watch', 'context.write', 'context.find'], 1, 'watch нь өөрчлөлтийг дагаж UI-г шинэчилнэ.'),
    Q('ChangeNotifier дээр сонсогчдод мэдэгдэх method?', ['update()', 'notifyListeners()', 'refresh()', 'emit()'], 1, 'notifyListeners().'),
    Q('onPressed дотор model-ийн method дуудахад аль нь тохиромжтой вэ?', ['context.watch', 'context.read', 'context.build', 'context.listen'], 1, 'Callback дотор read ашиглана.'),
  ],
  24: [
    Q('Жижиг тохиргоог хадгалахад аль package тохиромжтой вэ?', ['http', 'shared_preferences', 'provider', 'intl'], 1, 'shared_preferences.'),
    Q('Жагсаалт, объектыг shared_preferences-д хэрхэн хадгалах вэ?', ['Шууд хадгална', 'JSON String болгон', 'Зөвхөн int болгон', 'Хадгалж болохгүй'], 1, 'jsonEncode-оор String болгож хадгална.'),
    Q('Widget үүсэхэд нэг удаа ачаалах үйлдлийг аль method-д бичих вэ?', ['build()', 'initState()', 'dispose()', 'setState()'], 1, 'initState нэг удаа дуудагдана.'),
  ],
  25: [
    Q('JSON-оос Dart объект үүсгэх конструкторыг ихэвчлэн юу гэж нэрлэх вэ?', ['fromJson', 'parse', 'decode', 'create'], 0, 'factory Todo.fromJson(...).'),
    Q('Шудрахад жагсаалтаас устгадаг widget?', ['Dismissible', 'Swipeable', 'Removable', 'Draggable'], 0, 'Dismissible.'),
    Q('Өгөгдөл өөрчлөх бүрд UI-г шинэчлэхийн тулд model дотор юу дуудах вэ?', ['setState', 'notifyListeners', 'build', 'runApp'], 1, 'ChangeNotifier-ийн notifyListeners().'),
  ],
  26: [
    Q('JSON хариуг Dart Map/List болгох функц?', ['jsonDecode', 'jsonParse', 'toMap', 'fromString'], 0, 'dart:convert-ийн jsonDecode.'),
    Q('Амжилттай GET хүсэлтийн статус код?', ['200', '404', '500', '301'], 0, '200 нь амжилттай.'),
    Q('http.get-д URL-ийг ямар төрлөөр өгөх вэ?', ['String', 'Uri', 'int', 'Map'], 1, 'Uri.parse(...).'),
  ],
  27: [
    Q('FutureBuilder-ийн future-ийг build() дотор шууд fetchPosts() гэж өгвөл юу болох вэ?', ['Асуудалгүй', 'build бүрт шинэ хүсэлт илгээгдэнэ', 'Алдаа гарна', 'Хүсэлт илгээгдэхгүй'], 1, 'Тиймээс initState-д нэг удаа үүсгэж хадгална.'),
    Q('Өгөгдөл ирэхийг хүлээж буй үед харуулах widget?', ['CircularProgressIndicator', 'Placeholder', 'Divider', 'Drawer'], 0, 'Ачаалж буйг заадаг spinner.'),
    Q('snapshot.hasError юуг шалгадаг вэ?', ['Интернэт байгаа эсэх', 'Future алдаатай дууссан эсэх', 'Хоосон жагсаалт эсэх', 'Төхөөрөмжийн төрөл'], 1, 'Future алдаа өгсөн эсэхийг шалгана.'),
  ],
  28: [
    Q('Firebase-д имэйл/нууц үгээр нэвтрэх үйлчилгээ аль нь вэ?', ['Firestore', 'Authentication', 'Storage', 'Messaging'], 1, 'Firebase Authentication.'),
    Q('Cloud Firestore юу вэ?', ['Файл хадгалалт', 'Бодит цагийн NoSQL мэдээллийн сан', 'Нэвтрэлт', 'Push мэдэгдэл'], 1, 'NoSQL мэдээллийн сан.'),
    Q('Firestore Rules-ийг туршилтын горимд үлдээвэл юу болох вэ?', ['Аюулгүй', 'Хэн ч уншиж бичиж болно', 'Хурдан болно', 'Юу ч болохгүй'], 1, 'Rules зөв тохируулаагүй бол мэдээлэл нээлттэй байна.'),
  ],
  29: [
    Q('RenderFlex overflowed алдааг ихэвчлэн яаж засах вэ?', ['Апп-ыг устгах', 'SingleChildScrollView эсвэл Expanded ашиглах', 'Package нэмэх', 'setState дуудах'], 1, 'Агуулга багтаж чадахгүй байгаа тул гүйлгэдэг болгох/хэмжээг зохицуулна.'),
    Q('Код дүн шинжилгээний команд?', ['flutter analyze', 'flutter check', 'flutter lint', 'dart test'], 0, 'flutter analyze.'),
    Q('Widget-ийн мод, хэмжээг харах хэрэгсэл?', ['Flutter DevTools', 'pub.dev', 'Firebase Console', 'DartPad'], 0, 'Flutter DevTools-ийн Widget Inspector.'),
  ],
  30: [
    Q('Төсөл хийхдээ эхлээд юу хийвэл зөв бэ?', ['Бүгдийг нэг дор бичих', 'Хуудсуудыг төлөвлөж, нэг нэгээр нь хийх', 'Firebase-ээс эхлэх', 'Загварыг хамгийн сүүлд хийх'], 1, 'Төлөвлөөд жижиг алхмаар хийнэ.'),
    Q('Гацсан үед хамгийн эхэнд юу хийх вэ?', ['Шууд бууж өгөх', 'Алдааг уншиж, асуудлыг жижигрүүлж шалгах', 'Бүх кодыг устгах', 'Дахин суулгах'], 1, 'Алдааны мессежийг унш, жижигрүүлж тусгаарла.'),
    Q('Том апп-ын state management-д дараа нь юу сурах вэ?', ['Riverpod эсвэл Bloc', 'Зөвхөн setState', 'HTML', 'jQuery'], 0, 'Riverpod, Bloc нь том апп-д тохиромжтой.'),
  ],
}
