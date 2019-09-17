import * as React from 'react';
export interface IProps {
  children?: React.ReactNode;
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

export const Button: React.FC<IProps> = props => (
  <button style={styles} type="button">
    {props.children}
  </button>
);

Button.defaultProps = {
  children: null,
};
