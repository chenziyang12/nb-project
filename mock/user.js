export default [
  {
    url: '/api/createUser',
    method: 'post',
    response: ({ body }) => {
      console.log("this",body);
      console.log('body>>>>>>>>', body);
      return {
        code: 500,
        message: 'err',
        data: "登录成功靓仔！",
      };
    },
  },
];