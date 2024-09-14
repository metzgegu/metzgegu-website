import infos from '../data/info.json';

async function getReadmeContent(fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
    console.log(fetch)
    const res = await fetch(infos.readme_link);
    const readme = await res.text();

    if (res.ok) {
      return readme;
    } else {
      throw new Error(readme);
    }
  }

export async function load({ fetch }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> })  {
    const readme = await getReadmeContent(fetch);

    return {
      status: 200,
      props: {
        readme
      }
    };
  }