type Bindings = {
  DB: D1Database;
  ASSETS: Fetcher;
};

export default {
  async fetch(request: Request, env: Bindings) {
    await env.DB.exec("insert into test values(null)");
    const result = await env.DB.prepare("select * from test").all();
    console.log(result);
    return env.ASSETS.fetch(request);
  },
};
