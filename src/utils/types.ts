export interface Member {
    name: string;
    title: string;
    institution: string;
    promoted: boolean;
    pelican: {
      title: string;
      weight: number;
    };
    image: string;
    organizations: string[];
  }