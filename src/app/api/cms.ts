export default async function Cms(req: any, res: any) {
	try {
		const crypto = require('crypto');
		const requestBody = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
		const expectedSignature = crypto
      .createHmac('sha256', test)
      .update(requestBody)
      .digest('hex');
		let signature = req.headers['X-MICROCMS-Signature'] || req.headers['x-microcms-signature'];

		if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
			return res.status(401).send('Invalid token');
		}
	} catch (err) {
		console.log(err);
		return res.status(401).send('Invalid token');
	}
	// micro cmsのカスタムリクエストヘッダーに登録した情報を取得
	let pageName = req.headers['X-PAGE-NAME'] || req.headers['x-page-name'];
	// 更新された情報　これらをもとに更新したいページを変更してください。
	const publishValue = req.body.contents.new.publishValue 
	
	// 更新したいページが "/" の場合
	try {
		await res.revalidate(`/`);
		return res.status(200).send();
	} catch (err) {
		console.log(err);
		return res.status(500).send('Error revalidating');
	}
}