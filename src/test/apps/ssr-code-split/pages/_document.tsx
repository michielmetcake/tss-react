import Document from "next/document";
import augmentDocumentWithEmotionCache from "tss-react/next/augmentDocumentWithEmotionCache";

augmentDocumentWithEmotionCache({ "key": "css" })(Document);

export default Document;
