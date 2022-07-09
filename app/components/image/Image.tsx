import { ImageProps } from "../../constants/types/components_props/types"

export const ImageContainer = ( {src = "", height = "auto", width = "auto", loading = "eager"}: ImageProps ) =>
{

    let imageName = src.substr(src.lastIndexOf('/') + 1)

    return (

        <img 
          src={src}
          alt={imageName}
          height={height}
          width={width}
          loading={loading}
        />

    )

}