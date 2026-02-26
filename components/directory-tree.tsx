"use client";

import { useState } from "react";
import { ChevronRight, Folder, FolderOpen, Globe, Layout } from "lucide-react";

export type TreeNode =
  | {
      id: string;
      name: string;
      type: "folder";
      children: TreeNode[];
    }
  | {
      id: string;
      name: string;
      type: "app";
      href: string;
      /** Optional icon URL (e.g. devicon) or React node */
      icon?: React.ReactNode | string;
    };

function TreeNodeRow({
  node,
  depth,
  expandedIds,
  onToggle,
}: {
  node: TreeNode;
  depth: number;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
}) {
  const isFolder = node.type === "folder";
  const isExpanded = isFolder && expandedIds.has(node.id);

  if (node.type === "app") {
    const icon =
      node.icon === undefined ? (
        <Layout className="h-4 w-4 text-muted-foreground" />
      ) : node.icon === "globe" ? (
        <Globe className="h-4 w-4 text-muted-foreground" />
      ) : typeof node.icon === "string" ? (
        <img src={node.icon} alt="" className="h-4 w-4 object-contain shrink-0" />
      ) : (
        node.icon
      );
    return (
      <a
        href={node.href}
        className="flex cursor-pointer w-fit items-center gap-2 py-1.5 pr-2 text-left text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
        style={{ paddingLeft: `${8 + depth * 20}px` }}
      >
        <span className="shrink-0 w-6 flex items-center justify-center" aria-hidden>
          {icon}
        </span>
        <span className="text-sm whitespace-nowrap">{node.name}</span>
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(node.id)}
        className="flex cursor-pointer w-fit items-center gap-2 py-1.5 pr-2 text-left group"
        style={{ paddingLeft: `${8 + depth * 20}px` }}
        aria-expanded={isExpanded}
      >
        <span
          className={`text-muted-foreground transition-transform duration-150 shrink-0 ${isExpanded ? "rotate-90" : ""}`}
          aria-hidden
        >
          <ChevronRight className="h-4 w-4" />
        </span>
        {isExpanded ? (
          <FolderOpen className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        ) : (
          <Folder className="h-4 w-4 shrink-0 text-primary/80" aria-hidden />
        )}
        <span className="text-sm font-medium text-foreground truncate flex-1 min-w-0">
          {node.name}
        </span>
      </button>
      {isExpanded && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNodeRow
              key={child.id}
              node={child}
              depth={depth + 1}
              expandedIds={expandedIds}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DirectoryTree({
  nodes,
  defaultExpandedIds = [],
}: {
  nodes: TreeNode[];
  defaultExpandedIds?: string[];
}) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(defaultExpandedIds)
  );

  const handleToggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <nav className="w-fit py-1" aria-label="Directory">
      {nodes.map((node) => (
        <TreeNodeRow
          key={node.id}
          node={node}
          depth={0}
          expandedIds={expandedIds}
          onToggle={handleToggle}
        />
      ))}
    </nav>
  );
}
