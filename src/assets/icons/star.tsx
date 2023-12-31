import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="var(--color-warning-300)"
        d="M11.7 14h-.3L8 12l-3.4 2a.7.7 0 0 1-1-.7l.7-3.7-2.7-2.7a.7.7 0 0 1-.2-.7.7.7 0 0 1 .5-.4L5.7 5l1.7-3.4a.7.7 0 0 1 1.2 0L10.3 5l3.8.6a.7.7 0 0 1 .5.4.7.7 0 0 1-.1.7l-2.8 2.7.7 3.7a.7.7 0 0 1-.3.7l-.4.1Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
