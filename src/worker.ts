onmessage = async (msg: MessageEvent<File>) => {
  console.log("this should fail inside webkit", OffscreenCanvas);

  postMessage(msg.data);
};
