"use client";

import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_PRIORITIES: { id: string; title: string; hint: string }[] = [
  {
    id: "perf",
    title: "Performance & experiência",
    hint: "Core Web Vitals, bundle e percepção de velocidade",
  },
  {
    id: "dx",
    title: "DX & qualidade de código",
    hint: "TypeScript, testes, revisão e padrões de projeto",
  },
  {
    id: "sec",
    title: "Segurança & dados",
    hint: "Auth, LGPD, segredos e contratos de API",
  },
  {
    id: "obs",
    title: "Observabilidade & confiabilidade",
    hint: "Logs, métricas, alertas e incident response",
  },
  {
    id: "a11y",
    title: "Acessibilidade & inclusão",
    hint: "WCAG, teclado e leitores de tela",
  },
];

function SortableRow({
  id,
  title,
  hint,
  disabled,
}: {
  id: string;
  title: string;
  hint: string;
  disabled: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-stretch gap-3 rounded-xl border border-zinc-200/90 bg-white/90 shadow-sm transition dark:border-white/[0.1] dark:bg-zinc-950/80 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] ${
        isDragging
          ? "z-10 scale-[1.01] border-[#4A4458]/50 shadow-lg ring-2 ring-[#4A4458]/25 dark:ring-[#4A4458]/35"
          : ""
      }`}
    >
      <button
        type="button"
        className="flex w-11 shrink-0 cursor-grab touch-pan-y items-center justify-center rounded-l-xl border-r border-zinc-200/80 bg-zinc-50 text-zinc-500 active:cursor-grabbing dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400"
        aria-label={`Arrastar: ${title}`}
        {...attributes}
        {...listeners}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <div className="min-w-0 flex-1 py-3 pr-3 sm:py-3.5">
        <p className="font-display text-sm font-semibold text-zinc-900 dark:text-white">
          {title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
          {hint}
        </p>
      </div>
    </div>
  );
}

export function InnovationDnd({ reducedMotion }: { reducedMotion: boolean }) {
  const [items, setItems] = useState(DEFAULT_PRIORITIES);
  const [mounted, setMounted] = useState(false);
  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 6 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 180, tolerance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  if (reducedMotion || !mounted) {
    return (
      <ol className="space-y-3">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-3 dark:border-white/[0.1] dark:bg-zinc-950/80"
          >
            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-1 font-display text-sm font-semibold text-zinc-900 dark:text-white">
              {item.title}
            </p>
            <p className="mt-1 text-xs text-zinc-500">{item.hint}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        <ul className="space-y-3" role="list">
          {items.map((item) => (
            <li key={item.id}>
              <SortableRow
                id={item.id}
                title={item.title}
                hint={item.hint}
                disabled={false}
              />
            </li>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
