export interface PostType {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            createdAt: string;
            updatedAt: string;
          };
        };
        revision: number;
        contentType: {
          sys: {
            id: string;
            type: string;
            createdAt: string;
            updatedAt: string;
          };
        };
        locale: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    locale: string;
  };
  fields: {
    internalName: string;
    seoFields: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    slug: string;
    author: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    publishedDate: string;
    title: string;
    shortDescription: string;
    featuredImage: {
      sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
      };
      fileds: {
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
    content: {
      data: {};
      content: any[];
      nodeType: string;
    };
    relatedBlogPosts: PostType[];
  };
}
