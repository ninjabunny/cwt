// eslint-disable-next-line react/display-name
export const candyWrapper = (props) => (WrappedComponent) => {
  return <WrappedComponent candy={true} {...props} />;
};
