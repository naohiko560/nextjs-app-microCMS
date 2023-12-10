import '../styles/globals.css';

// SSGform実装
const ContactPage = () => {
  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-6 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">お問い合わせフォーム</h1>
      <form action={process.env.SSG_FORM} method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-600">
            お名前<span className="text-red-600 ml-1 font-bold">※必須</span>
          </label>
          <input
            id="name"
            type="text"
            name="お名前"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-600">
            メールアドレス<span className="text-red-600 ml-1 font-bold">※必須</span>
          </label>
          <input
            id="email"
            type="email"
            name="メールアドレス"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="textarea" className="block font-medium text-gray-600">
            お問い合わせ内容<span className="text-red-600 ml-1 font-bold">※必須</span>
          </label>
          <textarea
            id="textarea"
            name="お問い合わせ内容"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
