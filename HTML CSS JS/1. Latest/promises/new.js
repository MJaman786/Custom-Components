async function myPromise() {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after 5s");
      }, 5000);
    });

    console.log("✅ Promise after 5s");
  } catch (error) {
    console.log(error);
  }
}

myPromise();
