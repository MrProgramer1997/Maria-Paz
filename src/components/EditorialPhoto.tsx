import type { ReactNode } from 'react'

interface EditorialPhotoProps {
  src: string
  alt: string
  className?: string
  children?: ReactNode
  eager?: boolean
}

export function EditorialPhoto({
  src,
  alt,
  className = '',
  children,
  eager = false,
}: EditorialPhotoProps) {
  return (
    <figure className={`editorial-photo ${className}`.trim()}>
      <div
        className="editorial-photo__backdrop"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
      <div className="editorial-photo__inner">
        <img
          className="editorial-photo__image"
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {children && <figcaption className="editorial-photo__caption">{children}</figcaption>}
    </figure>
  )
}
