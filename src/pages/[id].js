export async function getServerSideProps(context) {
  const { id } = context.params;

  const db = global.urlDB || {};
  const url = db[id];

  if (!url) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: url,
      permanent: false,
    },
  };
}

export default function RedirectPage() {
  return null;
}
