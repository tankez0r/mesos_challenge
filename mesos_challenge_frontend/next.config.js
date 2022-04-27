module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/loginapi",
        destination: "https://localhost/login/",
      },
    
    ];
  };
  return {
    rewrites,
    reactStrictMode: true,
  };
};




