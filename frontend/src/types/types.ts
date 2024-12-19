export type Notes = {
  title: string;
  image: string | null;
  body: string;
  tag: string | "all";
  reviewDate: string | null;
  createdDate: string;
  id: string;
  user: string;
  color:
    | "#FFD1DC"
    | "#A7C7E7"
    | "#D4F1BE"
    | "#FFFACD"
    | "#E6E6FA"
    | "#FFDAB9";
};
