import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function ProjectCard({ project, onImageLoad }) {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-white rounded-xl shadow-lg">
      {project.image ? (
        <div className="overflow-hidden rounded-lg w-full h-44 md:h-56 lg:h-64 bg-gray-100">
          <img
            className="object-cover w-full h-full"
            src={encodeURI(project.image)}
            alt={project.name}
            loading="lazy"
            onLoad={onImageLoad}
          />
        </div>
      ) : (
        <div className="w-full rounded-lg h-44 md:h-56 lg:h-64 bg-gray-100 flex items-center justify-center text-gray-400">
          No image
        </div>
      )}

      <div className="mt-4 flex flex-col flex-1">
        <div>
          <p className="font-semibold text-lg">{project.name}</p>
          <p className="font-medium text-gray-600 mt-1">{project.date}</p>
        </div>

        <div className="mt-auto flex justify-center">
          <Link
            to={`/project/${project.id}`}
            state={{ project }}
            className="no-underline"
          >
            <Button className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
