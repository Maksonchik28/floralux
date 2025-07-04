// FloraLux — Премиум-магазин цветов и подарков
// С переадресацией в Telegram для заказа

import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Букет 'Королева роз'",
    price: 12990,
    image: "https://images.unsplash.com/photo-1592928301669-aea36ebbc2be",
  },
  {
    id: 2,
    name: "Мишка с сердцем XL",
    price: 7490,
    image: "https://images.unsplash.com/photo-1615485298756-1c84c8a0b6e6",
  },
  {
    id: 3,
    name: "Свадебная нежность",
    price: 14500,
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
  },
  {
    id: 4,
    name: "Плюшевый единорог",
    price: 5990,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
];

export default function FloraLux() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", note: "" });

  const addToCart = (product) => setCart([...cart, product]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Новый заказ от ${formData.name}%0AТелефон: ${formData.phone}%0AКомментарий: ${formData.note}%0AИтого: ${total.toLocaleString("ru-RU")} ₽`;
    window.open(`https://t.me/Florf_lux?start=order&text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-400">FloraLux</h1>
        <button
          className="flex items-center gap-2 text-rose-400"
          onClick={() => setShowCart(true)}
        >
          <ShoppingCart />
          <span>{cart.length}</span>
        </button>
      </header>

      <section className="bg-[url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6')] bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold shadow-inner">
        Роскошные цветы и подарки для особых моментов
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8">Каталог</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-rose-500 font-bold mb-4">
                  {product.price.toLocaleString("ru-RU")} ₽
                </p>
                <button
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded"
                  onClick={() => addToCart(product)}
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bg-white py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">О нас</h2>
        <p className="max-w-3xl mx-auto">
          FloraLux — это не просто магазин. Мы создаем настроение и эмоции.
          Наши цветы и подарки приносят радость в каждый дом.
        </p>
      </section>

      <section className="bg-rose-100 py-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Контакты</h2>
        <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
        <p className="mb-2">Адрес: г. Москва, Цветочная ул., 5</p>
        <p>Email: info@floralux.ru</p>
        <p>
          Telegram: <a className="text-rose-500 underline" href="https://t.me/Florf_lux" target="_blank">@Florf_lux</a>
        </p>
      </section>

      <footer className="bg-rose-200 text-center text-sm text-gray-600 py-6 mt-12">
        &copy; 2025 FloraLux. Все права защищены.
      </footer>

      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
              onClick={() => setShowCart(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Корзина</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Корзина пуста</p>
            ) : (
              <div>
                <ul className="mb-4">
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between border-b py-2">
                      <span>{item.name}</span>
                      <span>{item.price.toLocaleString("ru-RU")} ₽</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold mb-4">Итого: {total.toLocaleString("ru-RU")} ₽</p>
                <form onSubmit={handleSubmit} className="grid gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="border rounded px-3 py-2"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="border rounded px-3 py-2"
                    required
                  />
                  <textarea
                    name="note"
                    placeholder="Комментарий к заказу"
                    value={formData.note}
                    onChange={handleFormChange}
                    className="border rounded px-3 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-rose-400 hover:bg-rose-500 text-white py-2 rounded"
                  >
                    Оформить заказ в Telegram
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
