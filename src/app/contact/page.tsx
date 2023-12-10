import '../styles/globals.css';

// SSGform実装
const ContactPage = () => {
  return (
    <div>
      <form action={process.env.SSG_FORM} method="post">
        <input type="text" name="お名前" required />
        <input type="email" name="メールアドレス" required />
        <textarea name="お問い合わせ内容" required></textarea>
        <button type="submit">送信する</button>
      </form>
    </div>
  );
};

export default ContactPage;
