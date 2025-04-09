import { cn } from "@/utils/cn";

const compentenciesSection: CompetencyObject[] = [
  {
    color: "#5574f5",
    headingText: "technical",
    icon: "gear",
    listItems: [
      "software engineering",
      "frontend development",
      "backend development",
      "blockchain development",
      "data science & data analytics",
      "machine learning & artificial intelligence (ai)",
      "robotics",
      "Embedded Engineering",
      "Information Systems, Network Administration & Cyber Security",
      "technical writing",
    ],
  },
  {
    headingText: "creative",
    icon: "paintbrush",
    color: "#da28a4",
    listItems: [
      "Web Design & Mobile Design",
      "Graphic Design",
      "Fashion Design",
      "Game Design",
      "Product Design",
      "Marketing",
      "Film & Video",
      "Music & Audio",
      "Event Planning & Management",
    ],
  },
  {
    headingText: "business and professional",
    color: "#02734a",
    icon: "chart",
    listItems: [
      "Go-to-Market (gtm)",
      "sales, negotiation, and closing",
      "revenue operations",
      "management consulting",
      "managed services",
      "product management",
      "strategy",
      "blockchain law",
      "intellectual property (ip) law",
      "health law",
      "pharmaceuticals, pharmaceutical marketing, & medical writing",
      "psychology and psychiatry",
      "family medice",
    ],
  },
  {
    headingText: "teaching and tutoring",
    color: "#afa5ca",
    icon: "grad_cap",
    listItems: [
      "all of the above subjects",
      "grades 5-12 math",
      "computer science & programming",
      "k-8 competition math",
      "college prep, AP, & IB",
    ],
  },
];

type IconSymbol = "gear" | "chart" | "paintbrush" | "grad_cap";
type CompetencyObject = {
  color: string;
  headingText: string;
  icon: IconSymbol;
  listItems: string[];
};

const iconMap = {
  gear: ({ fill }: { fill: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z" />
      </svg>
    );
  },
  chart: ({ fill }: { fill: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 17.125v2h-24v-22h2v20h22z" />
      </svg>
    );
  },
  paintbrush: ({ fill }: { fill: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M0 0c2.799 1.2 8.683.955 8.307 6.371l-2.143 2.186c-5.338.093-5.239-5.605-6.164-8.557zm10.884 15.402c2.708 2.048 11.824 8.451 11.824 8.451.754.513 1.662-.417 1.136-1.162 0 0-6.607-8.964-8.719-11.619-1.668-2.101-2.502-2.175-5.46-3.046l-1.953 1.997c.936 2.931 1.033 3.76 3.172 5.379zm-4.877 3.332l2.62-2.626c-.26-.244-.489-.485-.69-.724l-2.637 2.643.707.707zm8.244-11.162l4.804-4.814 2.154 2.155-4.696 4.706c.438.525.813 1.021 1.246 1.584l6.241-6.253-4.949-4.95-6.721 6.733c.705.229 1.328.483 1.921.839zm4.837-3.366l-3.972 3.981c.24.199.484.423.732.681l3.946-3.956-.706-.706zm-9.701 12.554l-3.6 3.607-2.979.825.824-2.979 3.677-3.685c-.356-.583-.617-1.203-.859-1.904l-4.626 4.635-1.824 6.741 6.773-1.791 4.227-4.234c-1-.728-1.03-.749-1.613-1.215z" />
      </svg>
    );
  },
  grad_cap: ({ fill }: { fill: string }) => {
    return (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
      >
        <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
      </svg>
    );
  },
};

const CompetencyComponent = ({
  color,
  headingText,
  icon,
  listItems,
}: {
  color: string;
  headingText: string;
  icon: IconSymbol;
  listItems: string[];
}) => {
  const IconComponent = iconMap[icon];
  return (
    <div>
      <div className={cn("flex gap-2")}>
        <IconComponent fill={color} />
        <h3 style={{ color: color }} className={cn('uppercase underline')}>{headingText}</h3>
      </div>
      <ul>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const CompetencyList = () => {
  return (
    <div className={cn("flex flex-wrap py-4 px-6"
    )}>
      {compentenciesSection.map((comp, idx) => (
        <CompetencyComponent {...comp} key={idx} />
      ))}
    </div>
  );
};

export default CompetencyList;
