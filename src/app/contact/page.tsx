import '../styles/globals.css';

// SSGform実装
const ContactPage = () => {
  return (
    <div>
      <form action={process.env.SSG_FORM} method="post">
        <div>
          <label htmlFor="name">お名前</label>
          <input id="name" type="text" name="お名前" className="bg-blue-400" />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" name="メールアドレス" className="bg-blue-400" />
        </div>
        <div>
          <label htmlFor="textarea">お問い合わせ内容</label>
          <textarea id="textarea" name="お問い合わせ内容" className="bg-blue-400"></textarea>
        </div>
        <button type="submit">送信する</button>
      </form>
    </div>
  );
};

export default ContactPage;
