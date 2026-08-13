export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PortfolioFeatureWallsPartsFragmentDoc = gql`
    fragment PortfolioFeatureWallsParts on PortfolioFeatureWalls {
  __typename
  heading
  items {
    __typename
    label
    src
  }
}
    `;
export const PortfolioClosetsPartsFragmentDoc = gql`
    fragment PortfolioClosetsParts on PortfolioClosets {
  __typename
  heading
  items {
    __typename
    label
    src
  }
}
    `;
export const PortfolioMediaWallsPartsFragmentDoc = gql`
    fragment PortfolioMediaWallsParts on PortfolioMediaWalls {
  __typename
  heading
  items {
    __typename
    label
    src
  }
}
    `;
export const PortfolioHallwaysPartsFragmentDoc = gql`
    fragment PortfolioHallwaysParts on PortfolioHallways {
  __typename
  heading
  items {
    __typename
    label
    src
  }
}
    `;
export const PortfolioFeatureWallsDocument = gql`
    query portfolioFeatureWalls($relativePath: String!) {
  portfolioFeatureWalls(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PortfolioFeatureWallsParts
  }
}
    ${PortfolioFeatureWallsPartsFragmentDoc}`;
export const PortfolioFeatureWallsConnectionDocument = gql`
    query portfolioFeatureWallsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PortfolioFeatureWallsFilter) {
  portfolioFeatureWallsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PortfolioFeatureWallsParts
      }
    }
  }
}
    ${PortfolioFeatureWallsPartsFragmentDoc}`;
export const PortfolioClosetsDocument = gql`
    query portfolioClosets($relativePath: String!) {
  portfolioClosets(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PortfolioClosetsParts
  }
}
    ${PortfolioClosetsPartsFragmentDoc}`;
export const PortfolioClosetsConnectionDocument = gql`
    query portfolioClosetsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PortfolioClosetsFilter) {
  portfolioClosetsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PortfolioClosetsParts
      }
    }
  }
}
    ${PortfolioClosetsPartsFragmentDoc}`;
export const PortfolioMediaWallsDocument = gql`
    query portfolioMediaWalls($relativePath: String!) {
  portfolioMediaWalls(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PortfolioMediaWallsParts
  }
}
    ${PortfolioMediaWallsPartsFragmentDoc}`;
export const PortfolioMediaWallsConnectionDocument = gql`
    query portfolioMediaWallsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PortfolioMediaWallsFilter) {
  portfolioMediaWallsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PortfolioMediaWallsParts
      }
    }
  }
}
    ${PortfolioMediaWallsPartsFragmentDoc}`;
export const PortfolioHallwaysDocument = gql`
    query portfolioHallways($relativePath: String!) {
  portfolioHallways(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PortfolioHallwaysParts
  }
}
    ${PortfolioHallwaysPartsFragmentDoc}`;
export const PortfolioHallwaysConnectionDocument = gql`
    query portfolioHallwaysConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PortfolioHallwaysFilter) {
  portfolioHallwaysConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PortfolioHallwaysParts
      }
    }
  }
}
    ${PortfolioHallwaysPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    portfolioFeatureWalls(variables, options) {
      return requester(PortfolioFeatureWallsDocument, variables, options);
    },
    portfolioFeatureWallsConnection(variables, options) {
      return requester(PortfolioFeatureWallsConnectionDocument, variables, options);
    },
    portfolioClosets(variables, options) {
      return requester(PortfolioClosetsDocument, variables, options);
    },
    portfolioClosetsConnection(variables, options) {
      return requester(PortfolioClosetsConnectionDocument, variables, options);
    },
    portfolioMediaWalls(variables, options) {
      return requester(PortfolioMediaWallsDocument, variables, options);
    },
    portfolioMediaWallsConnection(variables, options) {
      return requester(PortfolioMediaWallsConnectionDocument, variables, options);
    },
    portfolioHallways(variables, options) {
      return requester(PortfolioHallwaysDocument, variables, options);
    },
    portfolioHallwaysConnection(variables, options) {
      return requester(PortfolioHallwaysConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
