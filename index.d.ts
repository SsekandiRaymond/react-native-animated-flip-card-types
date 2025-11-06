import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";
import React from "react";

/**
 * @description A React Native component that provides a customizable, animated flip card with both horizontal and vertical flipping directions. Perfect for creating interactive and engaging user interfaces.
 *
 * @author
 * @description Component author
 * @link [Mehul K. Jetani](https://github.com/mehuljetani)
 *
 * @author
 * @description Component types by:
 * @link [Ssekandi Raymond](https://github.com/SsekandiRaymond)
 */
declare module "react-native-animated-flip-card" {
    /**
     * @description Props for the DynamicCard component
     */
    export interface DynamicCardProps {
        /**
         * @description The text for front side.
         * @type string
         * @default ""
         */
        title: string;

        /**
         * @description The URL of the image front side.
         * @type string
         * @default ""
         */
        imageUrl?: string;

        /**
         * @description The text title for the back side.
         * @type string
         * @default ""
         */
        backTitle?: string;

        /**
         * @description The description for the front side.
         * @type string
         * @default ""
         */
        description: string;

        /**
         * @description The URL of the image back side.
         * @type string
         * @default ""
         */
        backImageUrl?: string;

        /**
         * The description on the back side.
         * @type string
         * @default ""
         */
        backDescription?: string;

        /**
         * @description Custom style for the card container.
         * @type StyleProp<ViewStyle> from react-native
         * @default {}
         */
        cardStyle?: StyleProp<ViewStyle>;

        /**
         * @description Custom style for the title text.
         * @type StyleProp<TextStyle> from react-native
         * @default {}
         */
        titleStyle?: StyleProp<TextStyle>;

        /**
         * @description Custom style for the image.
         * @type StyleProp<ImageStyle> from react-native
         * @default {}
         */
        imageStyle?: StyleProp<ImageStyle>;

        /**
         * @description Custom style for the description text.
         * @type StyleProp<TextStyle> from react-native
         * @default {}
         */
        descriptionStyle?: StyleProp<TextStyle>;

        /**
         * @description Direction of the flip animation.
         * @type "horizontal" | "vertical" union
         * @default "horizontal"
         */
        flipDirection?: "horizontal" | "vertical";
    }

    const DynamicCard: React.FC<DynamicCardProps>;
    export default DynamicCard;
}
