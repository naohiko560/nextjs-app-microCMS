import '../styles/globals.css';

// グーグルフォームの出力
const ContactPage = () => {
  return (
    <div>
      <iframe src={process.env.GMAIL} width="100%" height="1100" className="bg-white"></iframe>
    </div>
  );
};

export default ContactPage;
