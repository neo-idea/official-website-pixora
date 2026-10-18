const origin = new URL("https://neo-idea.github.io/pixora-official");

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const upstream = new URL(origin);
    upstream.pathname = origin.pathname.replace(/\/$/, "") + incoming.pathname;
    upstream.search = incoming.search;

    const response = await fetch(new Request(upstream, request));
    const headers = new Headers(response.headers);
    headers.set("x-pixora-origin", origin.toString());
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
