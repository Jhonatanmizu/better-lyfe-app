import {normalize, moderateScale} from '@infrastructure/theme/responsive';

/**
 * Shared responsive constants for all onboarding screens.
 *
 * These values are used identically across TrackGoals, Habits, and AIInsights.
 * Keeping them in one place eliminates duplication and ensures consistency.
 */

/** Outer decorative circle diameter */
export const CIRCLE_OUTER_SIZE = normalize(200);

/** Middle decorative circle diameter */
export const CIRCLE_MIDDLE_SIZE = normalize(140);

/** Inner decorative circle diameter */
export const CIRCLE_INNER_SIZE = normalize(80);

/** Icon size inside the inner circle */
export const ICON_SIZE = normalize(40);

/** Pagination dot diameter */
export const DOT_SIZE = normalize(8);

/** Large border-radius used for primary buttons */
export const BORDER_RADIUS_L = moderateScale(26);
