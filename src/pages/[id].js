import { db } from './api/shorten';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const url = db[id];

  if (!url) {
    return { notFound: true }; // triggers 404
  }

  return {
    redirect: {
      destination: url,
      permanent: false,
    },
  };
}

export default function Redirect() {
  return null;
}
