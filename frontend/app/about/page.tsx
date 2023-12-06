import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const ProtectedPage = async () => {
  return <>protected content</>;
};

export default withPageAuthRequired(ProtectedPage, {});
