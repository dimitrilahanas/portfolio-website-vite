export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubRepo: string;
    backendRepo?: string;
    slug: string;
}