function parseCookies(cookieString) {
  // cookieString = "__stripe_mid=4792af34-8e93-492b-9d6f-fd73e418031c665564; userId=m41rqcbk5lk; pepito=grillo; car=ferrari; age=123"
  if (!cookieString) return {};

  const keyValues = cookieString.split("; ");

  const cookies = keyValues.reduce((accum, keyValue) => {
    const keyAndValue = keyValue.split("=");

    const key = keyAndValue[0];
    const value = keyAndValue[1];

    accum[key] = value;

    return accum;
  }, {});

  return cookies;
}

module.exports = parseCookies;
