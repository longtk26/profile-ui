import { BookCopy, CloudRain, Coffee, ContactRound, Container, Database, KeyRound } from "lucide-react";

export const sidebarGroups = [
    {
        name: "Backend",
        items: [
            {
                title: "Database",
                url: "/backend/database",
                icon: Database,
                contents: ["postgres", "elasticsearch", "redis"],
            },
            {
                title: "Authentication",
                url: "/backend/authentication",
                icon: KeyRound,
                contents: ["sso", "jwt", "oauth2"],
            },
            {
                title: "JAVA",
                url: "/backend/java",
                icon: Coffee,
                contents: ["spring boot"],
            },
        ],
    },
    {
        name: "Devops",
        items: [
            {
                title: "AWS",
                url: "/devops/aws",
                icon: CloudRain,
                contents: ["ec2", "s3", "cloudfront"],
            },
            {
                title: "Docker",
                url: "/devops/docker",
                icon: Container,
                contents: ["docker-compose", "kubernetes"],
            }
        ],
    },
    {
        name: "About Author",
        items: [
            {
                title: "Projects",
                url: "/about/projects",
                icon: BookCopy,
                contents: ["ec2", "s3", "cloudfront"],
            },
            {
                title: "Information",
                url: "/about/info",
                icon: ContactRound,
                contents: ["docker-compose", "kubernetes"],
            }
        ],
    },
];
