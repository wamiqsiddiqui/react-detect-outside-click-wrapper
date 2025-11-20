import { useRef, useEffect, useCallback, type RefObject } from "react"

export type ClickOutsideProps = {
  children: React.ReactNode
  disallowOutsideClick?: boolean
  onClick: () => void
  className?: string
  toggleButtonRef?: RefObject<HTMLDivElement | HTMLButtonElement | null>
}
export const DetectOutsideClickWrapper: React.FC<ClickOutsideProps> = ({
  children,
  disallowOutsideClick,
  onClick,
  className,
  toggleButtonRef,
}) => {
  const wrapperRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const handleClickListener = useCallback(
    (event: MouseEvent) => {
      const clickedNode = event.target as Node

      const isInsideWrapper =
        wrapperRef?.current?.contains(clickedNode) ?? false

      const isInsideToggleButton =
        toggleButtonRef?.current?.contains(clickedNode) ?? false
      const isClickedInside = isInsideWrapper || isInsideToggleButton
      if (isClickedInside) return
      if (!disallowOutsideClick) onClick()
    },
    [onClick, disallowOutsideClick, toggleButtonRef]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener)
    return () => {
      document.removeEventListener("mousedown", handleClickListener)
    }
  }, [handleClickListener])
  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  )
}
