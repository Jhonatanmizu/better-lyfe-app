import {Dimensions, PixelRatio, ScaledSize} from 'react-native';

/**
 * ============================================================================
 * RESPONSIVE SCALING UTILITIES
 * ============================================================================
 *
 * Reference device: iPhone X / common modern phone (375×812 logical pixels)
 * This is a widely-used baseline that works across iOS and Android.
 *
 * - iPhone SE:        375×667  → scale ~1.0
 * - iPhone 14/15:     393×852  → scale ~1.05
 * - Pixel 7:          412×915  → scale ~1.1
 * - Samsung S24:      384×854  → scale ~1.02
 * - iPad mini:        744×1133 → scale ~1.98
 * - iPad Air 11":     834×1194 → scale ~2.22
 *
 * Usage:
 *   import { normalize, verticalScale, moderateScale, scaleFontSize } from '@infrastructure/theme/responsive';
 *   width: normalize(200)
 *   height: verticalScale(100)
 *   margin: moderateScale(20, 0.3)
 *   fontSize: scaleFontSize(16)
 * ============================================================================
 */

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/**
 * Base reference dimensions.
 * 375×812 is the iPhone X logical resolution and serves as a
 * neutral baseline across most iOS and Android phones.
 */
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/** Width-based scale ratio */
const widthScale = SCREEN_WIDTH / BASE_WIDTH;

/** Height-based scale ratio */
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;

/**
 * Scales a size proportionally based on screen width.
 * Best for: widths, margins, paddings, border-radius, icon sizes.
 */
export function normalize(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(size * widthScale));
}

/**
 * Scales a size proportionally based on screen height.
 * Best for: heights, vertical paddings, line-heights.
 */
export function verticalScale(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(size * heightScale));
}

/**
 * Scales a size with a dampening factor.
 * factor=0 → returns `size` (no scaling)
 * factor=1 → returns `normalize(size)` (full width scaling)
 * factor=0.5 (default) → balanced scaling, good for most UI elements.
 *
 * Best for: padding, margin, border-radius, button heights —
 * elements you want to scale but not aggressively.
 */
export function moderateScale(size: number, factor = 0.5): number {
  return Math.round(
    PixelRatio.roundToNearestPixel(size + (normalize(size) - size) * factor),
  );
}

/**
 * Scales font sizes responsively while respecting OS-level
 * accessibility font scaling (PixelRatio.getFontScale()).
 *
 * Best for: all fontSize values.
 */
export function scaleFontSize(size: number): number {
  const fontScale = PixelRatio.getFontScale();
  const scaledSize = size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize * fontScale));
}

/**
 * Returns whether the device is a tablet.
 * Threshold: shortest edge >= 768 logical pixels
 * (iPad mini in portrait is 744, but close enough; iPad Air is 834)
 */
export function isTablet(): boolean {
  return Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) >= 768;
}

/**
 * Returns a value conditionally based on whether the device is a tablet.
 */
export function ifTablet<T>(tabletValue: T, phoneValue: T): T {
  return isTablet() ? tabletValue : phoneValue;
}

/**
 * Scales a size with additional tablet scaling.
 * On phones: behaves like `normalize(size)`
 * On tablets: applies an extra multiplier to make elements look native on larger screens.
 */
export function tabletScale(size: number, tabletMultiplier = 1.3): number {
  const scaled = normalize(size);
  return isTablet()
    ? Math.round(PixelRatio.roundToNearestPixel(scaled * tabletMultiplier))
    : scaled;
}

/**
 * ============================================================================
 * RE-EXPORTS & DIMENSIONS
 * ============================================================================
 */

export {SCREEN_WIDTH, SCREEN_HEIGHT};

/**
 * Hook-friendly dimensions for components that need to react
 * to orientation changes (even though the app is portrait-only,
 * split-view on iPad or foldables can trigger dimension changes).
 */
export function getDimensions(): ScaledSize {
  return Dimensions.get('window');
}
