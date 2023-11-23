const CustomErrorPage = () => {
  return (
    <div>
      <p className="text-7xl font-bold text-center">404</p>
      <h1 className="text-center mt-5">
        このページはすでに削除されているか、URLが間違っている可能性があります。
      </h1>
      <div className="mt-8 text-center">
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/12"
        >
          トップへ戻る
        </a>
      </div>
    </div>
  );
};

export default CustomErrorPage;
