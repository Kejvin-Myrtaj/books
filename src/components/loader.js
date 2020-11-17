/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { css, jsx } from "@emotion/core";
import React from "react";

const Loader = ({ loading, children }) => {
  return (
    <React.Fragment>
      {loading && (
        <div
          css={css`
            color: green;
            text-align: center;
            padding: 20px 0;
          `}
        >
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Loader;
