import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/modules/product/services/product.service';
import { ENUM_PRODUCT_TYPE } from 'src/modules/product/constants/product.enum.constant';
import { ProductDto } from 'src/modules/product/dtos/product.dto';

@Injectable()
export class MigrationProductSeed {
	constructor(private readonly productService: ProductService) { }

	@Command({
		command: 'seed:product',
		describe: 'seed products',
	})
	async seeds(): Promise<void> {
		const dataProducts: ProductDto[] = [
			{
				title: 'Сырная',
				description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
				price: 299,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Пепперони фреш',
				description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
				price: 299,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Двойной цыпленок',
				description: 'Цыпленок, моцарелла, фирменный соус альфредо',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Чоризо фреш',
				description: 'Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец',
				price: 299,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Ветчина и сыр',
				description: 'Ветчина, моцарелла, фирменный соус альфредо',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Бургер-пицца',
				description: 'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
				price: 439,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/06.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Мясная',
				description: 'Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, фирменный томатный соус',
				price: 489,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/07.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Цыпленок барбекю',
				description: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
				price: 539,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/08.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Четыре сыра',
				description: 'Сыр блю чиз, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
				price: 489,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/09.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Ветчина и грибы',
				description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/10.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Овощи и грибы',
				description: 'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы',
				price: 439,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/11.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Гавайская',
				description: 'Фирменный соус альфредо, цыпленок, моцарелла, ананасы',
				price: 439,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/12.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Маргарита',
				description: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/13.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Диабло',
				description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус',
				price: 539,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/14.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Цыпленок ранч',
				description: 'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
				price: 539,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/15.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Четыре сезона',
				description: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус',
				price: 439,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/16.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.PIZZA,
			},
			{
				title: 'Барбекю',
				description: 'Heinz',
				price: 49,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sauce/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SAUCE,
			},
			{
				title: 'Кетчуп',
				description: 'Heinz',
				price: 49,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sauce/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SAUCE,
			},
			{
				title: 'Кисло-сладкий',
				description: 'Heinz',
				price: 49,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sauce/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SAUCE,
			},
			{
				title: 'Сырный',
				description: 'Heinz',
				price: 49,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sauce/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SAUCE,
			},
			{
				title: 'Острый Додстер',
				description: 'Горячая закуска с цыпленком, перчиком халапеньо, маринованными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
				price: 169,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Додстер',
				description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
				price: 169,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Дэнвич чоризо барбекю',
				description: 'Насыщенный вкус острых колбасок чоризо и пикантной пепперони с соусами бургер и барбекю, свежими томатами, маринованными огурчиками, моцареллой и луком в румяной чиабатте',
				price: 229,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Дэнвич ветчина и сыр',
				description: 'Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами, соусом ранч и чесноком',
				price: 229,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Картофель из печи',
				description: 'Запеченная в печи картошечка — привычный вкус и мало масла. В составе пряные специи',
				price: 219,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Куриные кусочки',
				description: 'Сочные кусочки цельного куриного филе с золотистой корочкой',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/06.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Куриные крылья барбекю',
				description: 'Куриные крылышки со специями и ароматом копчения. В порции присутствуют локтевые и плечевые части крылышек',
				price: 389,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/07.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Салат Цезарь',
				description: 'Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы',
				price: 245,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/snack/08.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SNACK,
			},
			{
				title: 'Филадельфия с луком',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, лук зелёный, лосось , 255 г',
				price: 399,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Филадельфия лосось лайт',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, огурец, лосось , 230 г',
				price: 379,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Филадельфия с лососем холодного копчения',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, огурец, лосось холодного копчения , 240 г',
				price: 399,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Филадельфия с лососем холодного копчения лайт',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, огурец, лосось холодного копчения, сыр сливочный , 230 г',
				price: 379,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Филадельфия унаги лайт',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, огурец, угорь, соус унаги, кунжут белый , 240 г',
				price: 435,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Харакири',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, лосось, соус унаги, лук зелёный, помидор, майонез, паста кимчи, огурец, сыр сливочный, соус терияки, 225 г',
				price: 279,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/06.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Рейдзи',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, вакаме, кунжут белый, кунжут чёрный, салат , 185 г',
				price: 225,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/07.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Бюрондо',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, лосось холодного копчения, огурец, сыр сливочный, кунжут белый , 215 г',
				price: 335,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/08.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Рейкан',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, лосось, соус унаги, такуан, огурец, сыр сливочный, тобико , 165 г',
				price: 339,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/09.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Авокадо маки',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, авокадо , 130 г',
				price: 199,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/10.webp',
				labelText: 'vegan',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Кокоро',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, лосось, икра лососевая, сыр сливочный, огурец, 140 г',
				price: 399,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/11.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Сяке кунсей маки',
				description: 'Рис, мицукан, сахар, комбу, соль, нори, лосось холодного копчения, огурец, сыр сливочный, лук зелёный, майонез, паста кимчи , 170 г',
				price: 269,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/sushi/12.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.SUSHI,
			},
			{
				title: 'Rich Tea Зеленый',
				description: 'Rich Tea',
				price: 119,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Rich Tea Зеленый с манго',
				description: 'Rich Tea',
				price: 119,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Rich Tea Черный с лимоном',
				description: 'Rich Tea',
				price: 119,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Добрый Кола',
				description: 'Пепьси?',
				price: 109,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Морс Черная смородина',
				description: 'Для усиления ощущений от морса рекомендуем закрыть глаза и представить себя у бабушки в саду. Дизайн товара может отличаться',
				price: 129,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Морс Вишня',
				description: 'Напиток со вкусом ностальгии — летние каникулы, теплые ночи и уютные дачные посиделки. А еще никаких косточек. Дизайн товара может отличаться',
				price: 129,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/06.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Морс Клюква',
				description: 'Эта ягода хитра! Наш фирменный морс для любителей сладкой кислинки. Дизайн товара может отличаться',
				price: 129,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/07.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Вода BonaAqua',
				description: 'негазированная',
				price: 75,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/drink/08.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DRINK,
			},
			{
				title: 'Слоеные палочки с соусом манго и ананасами',
				description: 'Это что-то на тропическом! Ананас и манговый соус на воздушном слоеном тесте',
				price: 249,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/01.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Слоеные палочки с ананасами и брусникой',
				description: 'Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте',
				price: 229,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/02.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Чизкейк Нью-Йорк',
				description: 'Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк',
				price: 149,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/03.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Чизкейк Банановый с шоколадным печеньем',
				description: 'Солнечный снаружи и яркий по вкусу внутри. Летняя новинка — нежный чизкейк с бананом и шоколадным печеньем',
				price: 149,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/04.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Сырники с малиновым вареньем',
				description: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
				price: 295,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Рулетики с корицей',
				description: 'Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром',
				price: 205,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/06.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Маффин Соленая карамель',
				description: 'Раз откусить — навсегда полюбить! Оцените яркое сочетание соленой карамели и арахиса',
				price: 99,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/07.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Маффин Три шоколада',
				description: 'Ну и кекс этот маффин! Он из натурального какао, а внутри — нежная начинка из кубиков белого и молочного шоколада',
				price: 99,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/dessert/08.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.DESSERT,
			},
			{
				title: 'Комбо от 599 ₽',
				description: 'Если хочется всего понемногу. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена',
				price: 599,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/01.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '2 пиццы',
				description: 'Парочка что надо. 2 средние пиццы. Цена комбо зависит от выбранных пицц и может быть увеличена',
				price: 989,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/02.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '3 пиццы',
				description: 'Три удовольствия в нашем меню — это 3 средние пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена',
				price: 1099,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/03.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '4 Закуски',
				description: 'Сытный квартет для маленькой компании. Комбо из четырех закусок на выбор',
				price: 619,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/04.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '2 Додстера',
				description: 'Кручу-верчу, два горячих Додстера хочу! Особенно, если один Классический, а другой — Острый с халапеньо, солеными огурчиками и соусом барбекю в тонкой пшеничной лепешке',
				price: 319,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/05.webp',
				labelText: 'labelText',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '2 Десерта',
				description: 'Тут как ни крути, выйдет сладкая парочка. Хотите — два маффина, а хотите — составьте ваш собственный дуэт из других десертов',
				price: 179,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/06.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: '2 Кофе: Латте или Капучино',
				description: 'Отличная возможность проверить, где молочная пенка вкуснее — в латте или в капучино?',
				price: 289,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/07.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
			{
				title: 'Выгодная пара: 2 Напитка',
				description: 'Одним словом — литр. Выберите две бутылочки на свой вкус: газировку Добрый или холодный чай Rich',
				price: 199,
				img: 'https://194.87.210.5:5000/incredible-pizza/products/combo/08.webp',
				labelText: 'Выгодно',
				type: ENUM_PRODUCT_TYPE.COMBO,
			},
		];

		try {
			await this.productService.createMany(dataProducts);
		} catch (err: any) {
			throw new Error(err.message);
		}

		return;
	}
}
