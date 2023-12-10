import '../styles/globals.css';

// SSGform実装
const ContactPage = () => {
  return (
    <div>
      <form action={process.env.SSG_FORM} method="post">
        <input type="text" name="お名前" required className="border-blue-400 " placeholder='お名前' />
        <input type="email" name="メールアドレス" required className="border-blue-400" placeholder='メールアドレス' />
        <textarea name="お問い合わせ内容" required className="border-blue-400" placeholder='お問い合わせ内容'></textarea>
        <button type="submit">送信する</button>
      </form>
    </div>
  );
};

export default ContactPage;
