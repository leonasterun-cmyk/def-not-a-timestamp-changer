var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// revenge:revenge:@revenge-mod/discord/actions
var require_actions = __commonJS({
  "revenge:revenge:@revenge-mod/discord/actions"(exports, module) {
    module.exports = revenge.discord.actions;
  }
});

// revenge:revenge:@revenge-mod/discord/common/logger
var require_logger = __commonJS({
  "revenge:revenge:@revenge-mod/discord/common/logger"(exports, module) {
    module.exports = revenge.discord.common.logger;
  }
});

// revenge:revenge:@revenge-mod/json-storage
var require_json_storage = __commonJS({
  "revenge:revenge:@revenge-mod/json-storage"(exports, module) {
    module.exports = revenge.jsonStorage;
  }
});

// revenge:revenge:@revenge-mod/plugins/utils
var require_utils = __commonJS({
  "revenge:revenge:@revenge-mod/plugins/utils"(exports, module) {
    module.exports = revenge.plugins.utils;
  }
});

// revenge:revenge:@revenge-mod/modules/finders
var require_finders = __commonJS({
  "revenge:revenge:@revenge-mod/modules/finders"(exports, module) {
    module.exports = revenge.modules.finders;
  }
});

// revenge:revenge:@revenge-mod/modules/finders/filters
var require_filters = __commonJS({
  "revenge:revenge:@revenge-mod/modules/finders/filters"(exports, module) {
    module.exports = revenge.modules.finders.filters;
  }
});

// revenge:revenge:@revenge-mod/patcher
var require_patcher = __commonJS({
  "revenge:revenge:@revenge-mod/patcher"(exports, module) {
    module.exports = revenge.patcher;
  }
});

// revenge:revenge:@revenge-mod/react
var require_react = __commonJS({
  "revenge:revenge:@revenge-mod/react"(exports, module) {
    module.exports = revenge.react;
  }
});

// revenge:revenge:@revenge-mod/discord/design
var require_design = __commonJS({
  "revenge:revenge:@revenge-mod/discord/design"(exports, module) {
    module.exports = revenge.discord.design;
  }
});

// revenge:revenge:react
var require_revenge_react = __commonJS({
  "revenge:revenge:react"(exports, module) {
    module.exports = revenge.react.React;
  }
});

// revenge:revenge:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "revenge:revenge:react/jsx-runtime"(exports, module) {
    module.exports = revenge.react.ReactJSXRuntime;
  }
});

// revenge:revenge:@revenge-mod/externals/react-native-clipboard
var require_react_native_clipboard = __commonJS({
  "revenge:revenge:@revenge-mod/externals/react-native-clipboard"(exports, module) {
    module.exports = revenge.externals.ReactNativeClipboard;
  }
});

// plugins/local-timestamp-editor/js/index.tsx
var import_actions4 = __toESM(require_actions(), 1);
var import_logger = __toESM(require_logger(), 1);
var import_json_storage = __toESM(require_json_storage(), 1);
var import_utils = __toESM(require_utils(), 1);

// plugins/local-timestamp-editor/js/bind.ts
var import_finders = __toESM(require_finders(), 1);
var import_filters = __toESM(require_filters(), 1);
var import_patcher = __toESM(require_patcher(), 1);
var import_react = __toESM(require_react(), 1);

// plugins/local-timestamp-editor/js/guards.ts
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isSnowflake(value) {
  return typeof value === "string" && /^[1-9]\d{0,19}$/.test(value);
}
function describeError(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// plugins/local-timestamp-editor/js/time.ts
var deviceOffsets = (instant) => -new Date(instant).getTimezoneOffset() * 6e4;
var DayMs = 864e5;
var MinuteMs = 6e4;
var MinEpochMs = -621355968e5;
var MaxEpochMs = 253402300799999;
var MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function isInteger(value) {
  return typeof value === "number" && Number.isInteger(value);
}
function pad2(value) {
  return value < 10 ? `0${value}` : String(value);
}
function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}
function validateWallClock(clock) {
  if (!isInteger(clock.year) || clock.year < 1e3 || clock.year > 9999)
    return "The year must be between 1000 and 9999.";
  if (!isInteger(clock.month) || clock.month < 1 || clock.month > 12)
    return "The month must be between 1 and 12.";
  const lastDay = daysInMonth(clock.year, clock.month);
  if (!isInteger(clock.day) || clock.day < 1 || clock.day > lastDay)
    return `${MonthNames[clock.month - 1]} ${clock.year} has ${lastDay} days.`;
  if (!isInteger(clock.hour) || clock.hour < 0 || clock.hour > 23)
    return "The hour must be between 0 and 23.";
  if (!isInteger(clock.minute) || clock.minute < 0 || clock.minute > 59)
    return "The minute must be between 0 and 59.";
}
function isValidEpochMs(value) {
  return isInteger(value) && value >= MinEpochMs && value <= MaxEpochMs;
}
function describeClock(clock) {
  return `${MonthNames[clock.month - 1]} ${clock.day}, ${clock.year} at ${pad2(clock.hour)}:${pad2(clock.minute)}`;
}
function wallClockAt(instant, offsets = deviceOffsets) {
  const shifted = new Date(instant + offsets(instant));
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
    hour: shifted.getUTCHours(),
    minute: shifted.getUTCMinutes()
  };
}
function sameWallClock(a, b) {
  return a.year === b.year && a.month === b.month && a.day === b.day && a.hour === b.hour && a.minute === b.minute;
}
function sameCalendarDay(a, b) {
  return a.year === b.year && a.month === b.month && a.day === b.day;
}
function resolveWallClock(clock, offsets = deviceOffsets) {
  const invalid = validateWallClock(clock);
  if (invalid) return { kind: "invalid", reason: invalid };
  const guess = Date.UTC(
    clock.year,
    clock.month - 1,
    clock.day,
    clock.hour,
    clock.minute
  );
  const candidates = /* @__PURE__ */ new Set([
    offsets(guess - DayMs),
    offsets(guess),
    offsets(guess + DayMs)
  ]);
  const instants = [];
  for (const offset of candidates) {
    const instant = guess - offset;
    if (sameWallClock(wallClockAt(instant, offsets), clock) && !instants.includes(instant))
      instants.push(instant);
  }
  if (instants.length === 0)
    return {
      kind: "nonexistent",
      reason: `${pad2(clock.hour)}:${pad2(clock.minute)} on ${MonthNames[clock.month - 1]} ${clock.day}, ${clock.year} does not occur in this time zone because the clock moved forward. Pick a different time.`
    };
  if (instants.length === 1) return { kind: "exact", ms: instants[0] };
  instants.sort((a, b) => a - b);
  return {
    kind: "ambiguous",
    earlierMs: instants[0],
    laterMs: instants[instants.length - 1]
  };
}
function instantForWallClock(clock, choice, offsets = deviceOffsets) {
  const resolution = resolveWallClock(clock, offsets);
  if (resolution.kind === "exact") return resolution.ms;
  if (resolution.kind !== "ambiguous") return void 0;
  return choice === "later" ? resolution.laterMs : resolution.earlierMs;
}
function offsetLabel(instant, offsets = deviceOffsets) {
  const totalMinutes = Math.round(offsets(instant) / MinuteMs);
  const sign = totalMinutes < 0 ? "-" : "+";
  const absolute = Math.abs(totalMinutes);
  const hours = Math.floor(absolute / 60);
  const minutes = absolute % 60;
  return minutes === 0 ? `GMT${sign}${hours}` : `GMT${sign}${hours}:${pad2(minutes)}`;
}
function deviceTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "local time";
  } catch {
    return "local time";
  }
}
function parseDateInput(text) {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text.trim());
  if (!match) return "Use the YYYY-MM-DD format, for example 2024-01-01.";
  const clock = {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: 0,
    minute: 0
  };
  return validateWallClock(clock) ?? clock;
}
function parseTimeInput(text) {
  const value = text.trim();
  const twelveHour = /^(\d{1,2}):(\d{2})\s*([ap])\.?m\.?$/i.exec(value);
  if (twelveHour) {
    const hour12 = Number(twelveHour[1]);
    const minute2 = Number(twelveHour[2]);
    if (hour12 < 1 || hour12 > 12) return "The hour must be between 1 and 12.";
    if (minute2 > 59) return "The minute must be between 0 and 59.";
    return {
      hour: hour12 % 12 + (twelveHour[3].toLowerCase() === "p" ? 12 : 0),
      minute: minute2
    };
  }
  const twentyFourHour = /^(\d{1,2}):(\d{2})$/.exec(value);
  if (!twentyFourHour)
    return "Use the HH:MM format, for example 22:40 or 10:40 PM.";
  const hour = Number(twentyFourHour[1]);
  const minute = Number(twentyFourHour[2]);
  if (hour > 23) return "The hour must be between 0 and 23.";
  if (minute > 59) return "The minute must be between 0 and 59.";
  return { hour, minute };
}
function draftForWallClock(clock) {
  return {
    date: `${clock.year}-${pad2(clock.month)}-${pad2(clock.day)}`,
    time: `${pad2(clock.hour)}:${pad2(clock.minute)}`
  };
}
function anchorFor(clock, offsets) {
  return instantForWallClock(clock, void 0, offsets) ?? Date.UTC(clock.year, clock.month - 1, clock.day, clock.hour, clock.minute);
}
function addMinutes(clock, minutes, offsets = deviceOffsets) {
  return wallClockAt(anchorFor(clock, offsets) + minutes * MinuteMs, offsets);
}
function toIsoString(instant) {
  return new Date(instant).toISOString();
}

// plugins/local-timestamp-editor/js/render.ts
var MessageRowType = 1;
var DisplayCopyCacheLimit = 512;
function createRenderStats() {
  return {
    rowOverrides: 0,
    propsOverrides: 0,
    listReorders: 0,
    skipped: 0,
    failures: 0
  };
}
var IsoTimestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function isIsoTimestamp(value) {
  return typeof value === "string" && value.length <= 40 && IsoTimestampPattern.test(value);
}
function noteFailure(stats, error) {
  stats.failures++;
  stats.lastFailure = describeError(error);
}
function overrideInstantIso(record) {
  return toIsoString(record.customTimestampMs);
}
function channelIdOf(message, fallback) {
  return isSnowflake(message.channelId) ? message.channelId : fallback;
}
function applyMessageOverride(holder, message, fallbackChannelId, source, stats) {
  if (!isIsoTimestamp(message.timestamp)) return false;
  const record = source.lookup(
    channelIdOf(message, fallbackChannelId),
    message.id
  );
  if (!record) return false;
  const iso = overrideInstantIso(record);
  if (message.timestamp === iso) return false;
  try {
    holder.message = { ...message, timestamp: iso };
    stats.rowOverrides++;
    return true;
  } catch (error) {
    noteFailure(stats, error);
    return false;
  }
}
function applyRowOverride(row, source, stats) {
  if (!source.hasAny() || !isRecord(row) || row.type !== MessageRowType)
    return false;
  let changed = false;
  if (isRecord(row.message))
    changed = applyMessageOverride(
      row,
      row.message,
      row.channelId,
      source,
      stats
    );
  const content = row.content;
  if (Array.isArray(content)) {
    for (const child of content) {
      if (!isRecord(child) || child.type !== MessageRowType) continue;
      if (!isRecord(child.message)) continue;
      if (applyMessageOverride(
        child,
        child.message,
        child.channelId ?? row.channelId,
        source,
        stats
      ))
        changed = true;
    }
  }
  return changed;
}
function createDisplayCopyCache() {
  const entries = /* @__PURE__ */ new Map();
  return {
    message(key, iso, source) {
      const existing = entries.get(key);
      if (existing && existing.iso === iso) return existing.copy;
      const copy = { ...source, timestamp: iso };
      if (entries.size >= DisplayCopyCacheLimit) entries.clear();
      entries.set(key, { iso, copy });
      return copy;
    },
    clear() {
      entries.clear();
    }
  };
}
function placedRow(item, index, source) {
  if (!isRecord(item) || item.type !== MessageRowType) return void 0;
  const message = item.message;
  if (!isRecord(message) || !isSnowflake(message.id)) return void 0;
  const channelId = channelIdOf(message, item.channelId);
  if (!isSnowflake(channelId)) return void 0;
  const record = source.lookup(channelId, message.id);
  const instant = record ? record.customTimestampMs : isIsoTimestamp(message.timestamp) ? Date.parse(message.timestamp) : Number.NaN;
  if (!Number.isFinite(instant)) return void 0;
  return { index, channelId, instant, overridden: record !== void 0 };
}
function reorderRowList(rows, source) {
  if (!source.hasAny() || !Array.isArray(rows) || rows.length < 2)
    return void 0;
  const byChannel = /* @__PURE__ */ new Map();
  for (let index = 0; index < rows.length; index++) {
    const placed = placedRow(rows[index], index, source);
    if (!placed) continue;
    const group = byChannel.get(placed.channelId);
    if (group) group.push(placed);
    else byChannel.set(placed.channelId, [placed]);
  }
  let output;
  for (const movable of byChannel.values()) {
    if (movable.length < 2 || !movable.some((row) => row.overridden)) continue;
    const ordered = [...movable].sort(
      (a, b) => a.instant - b.instant || a.index - b.index
    );
    if (ordered.every((row, position) => row.index === movable[position].index))
      continue;
    output ?? (output = [...rows]);
    for (let position = 0; position < movable.length; position++)
      output[movable[position].index] = rows[ordered[position].index];
  }
  return output;
}
function overrideListArgs(args, source, stats) {
  if (!source.hasAny()) return args;
  const props = args[1];
  if (!isRecord(props)) return args;
  try {
    const reordered = reorderRowList(props.data, source);
    if (!reordered) return args;
    args[1] = { ...props, data: reordered };
    stats.listReorders++;
  } catch (error) {
    noteFailure(stats, error);
  }
  return args;
}
function overrideJsxArgs(args, source, cache, stats) {
  if (!source.hasAny()) return args;
  const props = args[1];
  if (!isRecord(props)) return args;
  const nested = props.message;
  if (isRecord(nested) && typeof nested.id === "string") {
    if (!isIsoTimestamp(nested.timestamp)) {
      if (typeof nested.timestamp === "string") stats.skipped++;
      return args;
    }
    const channelId = channelIdOf(nested, props.channelId);
    const record = source.lookup(channelId, nested.id);
    if (!record) return args;
    const iso = overrideInstantIso(record);
    if (nested.timestamp === iso) return args;
    try {
      args[1] = {
        ...props,
        message: cache.message(
          `${String(channelId)}:${nested.id}`,
          iso,
          nested
        )
      };
      stats.propsOverrides++;
    } catch (error) {
      noteFailure(stats, error);
    }
    return args;
  }
  if (typeof props.id === "string") {
    if (!isIsoTimestamp(props.timestamp)) {
      if (typeof props.timestamp === "string") stats.skipped++;
      return args;
    }
    const channelId = isSnowflake(props.channelId) ? props.channelId : props.channel_id;
    const record = source.lookup(channelId, props.id);
    if (!record) return args;
    const iso = overrideInstantIso(record);
    if (props.timestamp === iso) return args;
    try {
      args[1] = { ...props, timestamp: iso };
      stats.propsOverrides++;
    } catch (error) {
      noteFailure(stats, error);
    }
  }
  return args;
}

// plugins/local-timestamp-editor/js/bind.ts
function bindDisplayOverrides(options) {
  const cleanups = [];
  const cache = createDisplayCopyCache();
  let propsHooks = 0;
  const handle = {
    rowPatched: false,
    get propsHooks() {
      return propsHooks;
    },
    release() {
      for (const cleanup of cleanups.splice(0)) {
        try {
          cleanup();
        } catch (error) {
          options.onError("Failed to remove a display patch", error);
        }
      }
      cache.clear();
    }
  };
  function register(label, bind) {
    try {
      cleanups.push(bind());
      return true;
    } catch (error) {
      options.onError(`Failed to register ${label}`, error);
      return false;
    }
  }
  register(
    "the message row hook",
    () => (0, import_finders.getModules)((0, import_filters.withName)("RowManager"), (module) => {
      const prototype = module?.prototype;
      if (!prototype || typeof prototype.generate !== "function") return;
      handle.rowPatched = true;
      register(
        "the message row override",
        () => (0, import_patcher.after)(prototype, "generate", (row) => {
          if (options.rowStrategyEnabled()) {
            try {
              applyRowOverride(row, options.source, options.stats);
            } catch (error) {
              options.onError(
                "Failed to apply a timestamp override to a message row",
                error
              );
            }
          }
          return row;
        })
      );
    })
  );
  function patchProps(args) {
    if (!options.propsStrategyEnabled()) return args;
    const patched = overrideJsxArgs(
      args,
      options.source,
      cache,
      options.stats
    );
    if (!options.reorderEnabled()) return patched;
    return overrideListArgs(
      patched,
      options.source,
      options.stats
    );
  }
  function patchCreateElement(args) {
    if (!options.propsStrategyEnabled()) return args;
    const patched = overrideJsxArgs(
      args,
      options.source,
      cache,
      options.stats
    );
    if (!options.reorderEnabled()) return patched;
    return overrideListArgs(
      patched,
      options.source,
      options.stats
    );
  }
  const hooks = [
    ["the jsx hook", () => (0, import_patcher.before)(import_react.ReactJSXRuntime, "jsx", patchProps)],
    ["the jsxs hook", () => (0, import_patcher.before)(import_react.ReactJSXRuntime, "jsxs", patchProps)],
    [
      "the createElement hook",
      () => (0, import_patcher.before)(import_react.React, "createElement", patchCreateElement)
    ]
  ];
  for (const [label, bind] of hooks) if (register(label, bind)) propsHooks++;
  return handle;
}

// plugins/local-timestamp-editor/js/context.ts
var active;
function setPluginContext(context) {
  active = context;
}
function pluginContext() {
  return active;
}
async function restoreOriginalTimestamp(context, channelId, messageId) {
  const removed = await context.store.remove(channelId, messageId);
  context.toast(
    removed ? "Original timestamp restored." : "There was no override to remove.",
    removed ? "success" : "default"
  );
  return removed;
}

// plugins/local-timestamp-editor/js/menu.tsx
var import_actions2 = __toESM(require_actions(), 1);
var import_design2 = __toESM(require_design(), 1);
var import_finders2 = __toESM(require_finders(), 1);
var import_filters2 = __toESM(require_filters(), 1);
var import_patcher2 = __toESM(require_patcher(), 1);

// plugins/local-timestamp-editor/js/settings.ts
var DefaultSettings = {
  preset: "client",
  pattern: "YYYY-MM-DD HH:mm",
  locale: "",
  keepSavedWallClock: true,
  applyToMessageRows: true,
  applyToPropsRenderingMessages: true,
  moveMessages: true
};
var PresetLabels = {
  client: "Client-style (Today at 10:40 PM)",
  full12: "Full date and time (12-hour)",
  full24: "Full date and time (24-hour)",
  relative: "Relative (3 years ago)",
  sortable: "Sortable (2024-01-01 22:40)",
  custom: "Custom pattern"
};
var FormatPresets = Object.keys(PresetLabels);
function isFormatPreset(value) {
  return typeof value === "string" && value in PresetLabels;
}
function normaliseSettings(raw) {
  const preset = isFormatPreset(raw?.preset) ? raw.preset : DefaultSettings.preset;
  return {
    preset,
    pattern: typeof raw?.pattern === "string" && raw.pattern.trim() ? raw.pattern : DefaultSettings.pattern,
    locale: typeof raw?.locale === "string" ? raw.locale : DefaultSettings.locale,
    keepSavedWallClock: raw?.keepSavedWallClock !== false,
    applyToMessageRows: raw?.applyToMessageRows !== false,
    applyToPropsRenderingMessages: raw?.applyToPropsRenderingMessages !== false,
    moveMessages: raw?.moveMessages !== false
  };
}

// plugins/local-timestamp-editor/js/format.ts
var SupportedTokens = [
  "YYYY",
  "YY",
  "MMMM",
  "MMM",
  "MM",
  "M",
  "DD",
  "D",
  "dddd",
  "ddd",
  "HH",
  "H",
  "hh",
  "h",
  "mm",
  "m",
  "ss",
  "A"
];
var TokenPattern = /'([^']*)'|YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|m|ss|A/g;
var FormatterCacheLimit = 64;
var formatterCache = /* @__PURE__ */ new Map();
var relativeCache = /* @__PURE__ */ new Map();
var MinuteMs2 = 6e4;
var HourMs = 36e5;
var DayMs2 = 864e5;
function anchor(clock) {
  return new Date(
    Date.UTC(clock.year, clock.month - 1, clock.day, clock.hour, clock.minute)
  );
}
function anchorDay(clock) {
  return Date.UTC(clock.year, clock.month - 1, clock.day);
}
function previousCalendarDay(now) {
  const date = new Date(anchorDay(now) - DayMs2);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: 0,
    minute: 0
  };
}
function formatter(locale, options) {
  const key = `${locale ?? ""}|${JSON.stringify(options)}`;
  const cached = formatterCache.get(key);
  if (cached) return cached;
  if (formatterCache.size >= FormatterCacheLimit) formatterCache.clear();
  const created = new Intl.DateTimeFormat(locale, {
    ...options,
    timeZone: "UTC"
  });
  formatterCache.set(key, created);
  return created;
}
function relativeFormatter(locale) {
  const key = locale ?? "";
  const cached = relativeCache.get(key);
  if (cached) return cached;
  if (relativeCache.size >= FormatterCacheLimit) relativeCache.clear();
  const created = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  relativeCache.set(key, created);
  return created;
}
function validatePattern(pattern) {
  if (!pattern.trim()) return "The pattern is empty.";
  const remainder = pattern.replace(TokenPattern, " ");
  const unknown = /[A-Za-z]+/.exec(remainder)?.[0];
  if (unknown)
    return `Unknown token "${unknown}". Supported tokens: ${SupportedTokens.join(", ")}.`;
}
function dayPeriod(locale, clock) {
  const parts = formatter(locale, {
    hour: "numeric",
    hour12: true
  }).formatToParts(anchor(clock));
  const labelled = parts.find((part) => part.type === "dayPeriod")?.value;
  if (labelled) return labelled;
  const words = parts.map((part) => part.value).join("").replace(/[0-9\s:]/g, "");
  return words || (clock.hour < 12 ? "AM" : "PM");
}
function formatPattern(pattern, clock, locale) {
  const hour12 = clock.hour % 12 === 0 ? 12 : clock.hour % 12;
  return pattern.replace(TokenPattern, (token, quoted) => {
    if (quoted !== void 0) return quoted;
    switch (token) {
      case "YYYY":
        return String(clock.year).padStart(4, "0");
      case "YY":
        return pad2(clock.year % 100);
      case "MMMM":
        return formatter(locale, { month: "long" }).format(anchor(clock));
      case "MMM":
        return formatter(locale, { month: "short" }).format(anchor(clock));
      case "MM":
        return pad2(clock.month);
      case "M":
        return String(clock.month);
      case "DD":
        return pad2(clock.day);
      case "D":
        return String(clock.day);
      case "dddd":
        return formatter(locale, { weekday: "long" }).format(anchor(clock));
      case "ddd":
        return formatter(locale, { weekday: "short" }).format(anchor(clock));
      case "HH":
        return pad2(clock.hour);
      case "H":
        return String(clock.hour);
      case "hh":
        return pad2(hour12);
      case "h":
        return String(hour12);
      case "mm":
        return pad2(clock.minute);
      case "m":
        return String(clock.minute);
      case "ss":
        return "00";
      case "A":
        return dayPeriod(locale, clock);
      default:
        return token;
    }
  });
}
function timeOf(locale, clock, hour12) {
  return formatter(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12
  }).format(anchor(clock));
}
function monthLong(locale, clock) {
  return formatter(locale, { month: "long" }).format(anchor(clock));
}
function longDate(locale, clock) {
  return `${monthLong(locale, clock)} ${clock.day}, ${clock.year}`;
}
function relativeText(locale, clock, now) {
  const delta = anchor(clock).getTime() - anchor(now).getTime();
  const absolute = Math.abs(delta);
  const sign = delta < 0 ? -1 : 1;
  const text = relativeFormatter(locale);
  if (absolute < MinuteMs2) return text.format(0, "second");
  if (absolute < HourMs)
    return text.format(sign * Math.round(absolute / MinuteMs2), "minute");
  if (absolute < DayMs2)
    return text.format(sign * Math.round(absolute / HourMs), "hour");
  if (absolute < 30 * DayMs2)
    return text.format(sign * Math.round(absolute / DayMs2), "day");
  if (absolute < 365 * DayMs2)
    return text.format(sign * Math.round(absolute / (30 * DayMs2)), "month");
  return text.format(sign * Math.round(absolute / (365 * DayMs2)), "year");
}
function activePattern(settings) {
  return validatePattern(settings.pattern) ? DefaultSettings.pattern : settings.pattern;
}
function formatClock({ clock, now, settings }) {
  const locale = settings.locale.trim() ? settings.locale.trim() : void 0;
  const preset = settings.preset;
  switch (preset) {
    case "full12":
      return `${longDate(locale, clock)} at ${timeOf(locale, clock, true)}`;
    case "full24":
      return `${longDate(locale, clock)} at ${timeOf(locale, clock, false)}`;
    case "relative":
      return relativeText(locale, clock, now);
    case "sortable":
      return `${clock.year}-${pad2(clock.month)}-${pad2(clock.day)} ${pad2(clock.hour)}:${pad2(clock.minute)}`;
    case "custom":
      return formatPattern(activePattern(settings), clock, locale);
    default: {
      const time = timeOf(locale, clock, void 0);
      if (sameCalendarDay(clock, now)) return `Today at ${time}`;
      if (sameCalendarDay(clock, previousCalendarDay(now)))
        return `Yesterday at ${time}`;
      if (clock.year === now.year)
        return `${monthLong(locale, clock)} ${clock.day} at ${time}`;
      return `${longDate(locale, clock)} at ${time}`;
    }
  }
}

// plugins/local-timestamp-editor/js/display.ts
function displayClock(record, settings) {
  return settings.keepSavedWallClock ? record.wallClock : wallClockAt(record.customTimestampMs);
}
function displayZoneLabel(record, settings) {
  return settings.keepSavedWallClock ? record.timeZone : `${deviceTimeZone()} (${offsetLabel(record.customTimestampMs)})`;
}
function displayText(record, settings) {
  return formatClock({
    clock: displayClock(record, settings),
    now: wallClockAt(Date.now()),
    settings
  });
}
function describeOriginal(record, settings) {
  const parsed = Date.parse(record.originalTimestamp);
  if (!Number.isFinite(parsed)) return record.originalTimestamp;
  return formatClock({
    clock: wallClockAt(parsed),
    now: wallClockAt(Date.now()),
    settings
  });
}

// plugins/local-timestamp-editor/js/ui/editor.tsx
var import_actions = __toESM(require_actions(), 1);
var import_design = __toESM(require_design(), 1);
var import_react2 = __toESM(require_revenge_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var {
  ActionSheet,
  ActionSheetRow,
  BottomSheetTitleHeader,
  Button,
  Stack,
  Text,
  TextInput
} = import_design.Design;
var SheetKey = "local-timestamp-editor:editor";
var Steppers = [
  { minutes: -1440, text: "\u22121d", label: "Move one day earlier" },
  { minutes: -60, text: "\u22121h", label: "Move one hour earlier" },
  { minutes: 60, text: "+1h", label: "Move one hour later" },
  { minutes: 1440, text: "+1d", label: "Move one day later" }
];
var styles = {
  form: { paddingHorizontal: 16, paddingVertical: 12 },
  actions: { paddingHorizontal: 16, paddingTop: 4, paddingBottom: 8 }
};
function openTimestampEditor(request) {
  import_actions.ActionSheetActionCreators.hideActionSheet();
  import_actions.ActionSheetActionCreators.openLazy(
    Promise.resolve({ default: TimestampEditorSheet }),
    SheetKey,
    request
  );
}
function TimestampEditorSheet(request) {
  const context = pluginContext();
  if (!context) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, { context, request });
}
function Editor({
  context,
  request
}) {
  const stored = context.storage.use();
  const settings = normaliseSettings(stored);
  const record = context.store.lookup(request.channelId, request.messageId);
  const now = wallClockAt(Date.now());
  const originalInstant = request.originalTimestamp ? Date.parse(request.originalTimestamp) : Number.NaN;
  const originalClock = Number.isFinite(originalInstant) ? wallClockAt(originalInstant) : void 0;
  const startClock = record ? displayClock(record, settings) : originalClock ?? now;
  const [date, setDate] = (0, import_react2.useState)(() => draftForWallClock(startClock).date);
  const [time, setTime] = (0, import_react2.useState)(() => draftForWallClock(startClock).time);
  const [choice, setChoice] = (0, import_react2.useState)(
    record && sameWallClock(record.wallClock, startClock) ? record.ambiguous : void 0
  );
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const dateValue = parseDateInput(date);
  const timeValue = parseTimeInput(time);
  const dateError = typeof dateValue === "string" ? dateValue : void 0;
  const timeError = typeof timeValue === "string" ? timeValue : void 0;
  const inputError = dateError ?? timeError;
  const clock = typeof dateValue === "string" || typeof timeValue === "string" ? void 0 : {
    ...dateValue,
    hour: timeValue.hour,
    minute: timeValue.minute
  };
  const resolution = clock ? resolveWallClock(clock) : void 0;
  const ambiguous = resolution?.kind === "ambiguous" ? resolution : void 0;
  const resolutionError = resolution?.kind === "invalid" || resolution?.kind === "nonexistent" ? resolution.reason : void 0;
  const chosenMs = resolution?.kind === "exact" ? resolution.ms : ambiguous && choice ? choice === "later" ? ambiguous.laterMs : ambiguous.earlierMs : void 0;
  const preview = clock && !resolutionError ? formatClock({ clock, now, settings }) : void 0;
  const originalText = originalClock ? describeClock(originalClock) : void 0;
  const currentOverride = record !== void 0 && chosenMs !== void 0 && record.customTimestampMs === chosenMs;
  const zoneLine = chosenMs === void 0 ? deviceTimeZone() : `${deviceTimeZone()} \xB7 ${offsetLabel(chosenMs)}`;
  const canSave = chosenMs !== void 0 && originalClock !== void 0 && !context.store.readOnly;
  const messageLabel = request.content ?? request.authorName;
  const messageSubLabel = request.content && request.authorName ? `From ${request.authorName}` : void 0;
  function changeDate(next) {
    setDate(next);
    setChoice(void 0);
  }
  function changeTime(next) {
    setTime(next);
    setChoice(void 0);
  }
  function step(minutes) {
    if (!clock) return;
    const draft = draftForWallClock(addMinutes(clock, minutes));
    setDate(draft.date);
    setTime(draft.time);
    setChoice(void 0);
  }
  async function save() {
    if (busy || !canSave || !clock || chosenMs === void 0 || !request.originalTimestamp)
      return;
    setBusy(true);
    let saved = false;
    try {
      saved = await context.store.save({
        channelId: request.channelId,
        messageId: request.messageId,
        originalTimestamp: request.originalTimestamp,
        customTimestampMs: chosenMs,
        wallClock: clock,
        timeZone: deviceTimeZone(),
        ambiguous: ambiguous ? choice : void 0,
        createdAtMs: 0,
        updatedAtMs: 0
      });
    } catch (error) {
      context.error("Failed to save the displayed timestamp", error);
    }
    if (!saved) {
      setBusy(false);
      context.toast("The displayed timestamp could not be saved.", "critical");
      return;
    }
    import_actions.ActionSheetActionCreators.hideActionSheet(SheetKey);
    context.toast(
      settings.moveMessages ? "Timestamp updated. Reopen the channel to refresh the message order." : "Timestamp updated.",
      "success"
    );
  }
  async function reset() {
    if (busy) return;
    setBusy(true);
    try {
      await restoreOriginalTimestamp(
        context,
        request.channelId,
        request.messageId
      );
    } catch (error) {
      context.error("Failed to restore the original timestamp", error);
      context.toast("The original timestamp could not be restored.", "critical");
      setBusy(false);
      return;
    }
    import_actions.ActionSheetActionCreators.hideActionSheet(SheetKey);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionSheet, { scrollable: true, keyboardShouldPersistTaps: "handled", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      BottomSheetTitleHeader,
      {
        title: "Edit timestamp",
        subtitle: "Changes what you see on this device. The message itself is unchanged."
      }
    ),
    messageLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionSheetRow.Group, { title: "Message", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ActionSheetRow,
      {
        label: messageLabel,
        subLabel: messageSubLabel,
        labelLineClamp: messageSubLabel ? 2 : 3,
        subLabelLineClamp: 1
      }
    ) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionSheetRow.Group, { title: "When it appears", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ActionSheetRow,
        {
          label: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { variant: "heading-sm/semibold", children: preview }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: "text-muted", variant: "text-md/medium", children: "Waiting for a valid date and time" }),
          subLabel: preview ? currentOverride ? "Current override, shown only to you" : "Shown only to you" : void 0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ActionSheetRow,
        {
          label: originalText ?? "Unavailable",
          subLabel: originalText ? "Everyone else still sees this" : "This message has no readable original timestamp",
          labelLineClamp: 1
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { spacing: 12, style: styles.form, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { direction: "horizontal", spacing: 8, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          TextInput,
          {
            label: "Date",
            placeholder: "2024-01-01",
            value: date,
            onChange: changeDate,
            status: dateError ? "error" : void 0,
            returnKeyType: "done",
            maxLength: 10,
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          TextInput,
          {
            label: "Time",
            placeholder: "22:40",
            value: time,
            onChange: changeTime,
            status: timeError ? "error" : void 0,
            returnKeyType: "done",
            maxLength: 8,
            style: { flex: 1 }
          }
        )
      ] }),
      inputError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: "text-feedback-critical", variant: "text-xs/medium", children: inputError }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, { direction: "horizontal", spacing: 6, children: Steppers.map((stepper) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          size: "md",
          variant: "secondary",
          grow: true,
          text: stepper.text,
          accessibilityLabel: stepper.label,
          hitSlop: 4,
          disabled: !clock || busy,
          onPress: () => step(stepper.minutes)
        },
        stepper.minutes
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { variant: "text-xs/medium", color: "text-muted", children: `Time zone: ${zoneLine}` }),
      ambiguous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { spacing: 8, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { spacing: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { variant: "text-sm/semibold", children: "This time occurs twice" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { variant: "text-xs/medium", color: "text-muted", children: "The clock moved back. Choose the occurrence to use." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { direction: "horizontal", spacing: 8, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              size: "md",
              grow: true,
              variant: choice === "earlier" ? "primary" : "secondary",
              text: `First \xB7 ${offsetLabel(ambiguous.earlierMs)}`,
              onPress: () => setChoice("earlier")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              size: "md",
              grow: true,
              variant: choice === "later" ? "primary" : "secondary",
              text: `Second \xB7 ${offsetLabel(ambiguous.laterMs)}`,
              onPress: () => setChoice("later")
            }
          )
        ] })
      ] }) : null,
      resolutionError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: "text-feedback-critical", variant: "text-xs/medium", children: resolutionError }) : null,
      !request.originalTimestamp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: "text-feedback-critical", variant: "text-xs/medium", children: "The original timestamp of this message could not be read, so it will not be changed." }) : null,
      context.store.readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: "text-feedback-critical", variant: "text-xs/medium", children: "Overrides are read-only because the stored data was written by a newer version of this plugin." }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, { direction: "horizontal", spacing: 8, style: styles.actions, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          variant: "secondary",
          text: "Cancel",
          disabled: busy,
          onPress: () => import_actions.ActionSheetActionCreators.hideActionSheet(SheetKey)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          grow: true,
          text: busy ? "Applying\u2026" : "Apply changes",
          loading: busy,
          disabled: !canSave || busy,
          onPress: () => void save()
        }
      )
    ] }),
    record ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionSheetRow.Group, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ActionSheetRow,
      {
        label: "Restore original timestamp",
        subLabel: "Show Discord's original time again.",
        variant: "danger",
        disabled: busy || context.store.readOnly,
        onPress: () => void reset()
      }
    ) }) : null
  ] });
}

// plugins/local-timestamp-editor/js/menu.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var { ActionSheet: ActionSheet2, ActionSheetRow: ActionSheetRow2 } = import_design2.Design;
function bindMessageMenu(options) {
  let unpatch;
  let unsubscribe;
  try {
    unsubscribe = (0, import_finders2.getModules)(
      // modules/messages/native/long_press/LongPressMessageActionSheet.tsx
      (0, import_filters2.withName)("LongPressMessageActionSheet"),
      (namespace) => {
        const module = namespace;
        if (typeof module.default !== "function") return;
        unpatch = (0, import_patcher2.instead)(
          module,
          "default",
          (args, Sheet) => {
            const tree = Reflect.apply(Sheet, void 0, args);
            try {
              const props = args[0];
              const group = props ? timestampActions(props) : void 0;
              if (group) appendToActionSheet(tree, group);
            } catch (error) {
              options.onError(
                "Failed to add the timestamp action to the message menu",
                error
              );
            }
            return tree;
          }
        );
      },
      { returnNamespace: true }
    );
  } catch (error) {
    options.onError("Failed to hook the message long press menu", error);
  }
  return () => {
    unsubscribe?.();
    unpatch?.();
  };
}
function timestampActions(props) {
  const context = pluginContext();
  const message = props.message;
  if (!context || !isRecord(message)) return void 0;
  if (!isSnowflake(message.id) || !isSnowflake(message.channelId))
    return void 0;
  if (typeof message.timestamp !== "string") return void 0;
  const { channelId, id } = message;
  const record = context.store.lookup(channelId, id);
  const settings = normaliseSettings(
    context.storage.cache
  );
  const { authorName, content } = previewOf(message);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ActionSheetRow2.Group, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ActionSheetRow2,
      {
        label: "Edit timestamp",
        subLabel: record ? `Shown as ${displayText(record, settings)}` : "Set a date and time only you will see",
        subLabelLineClamp: 2,
        onPress: closeAndRun(
          () => openTimestampEditor({
            channelId,
            messageId: id,
            originalTimestamp: message.timestamp,
            authorName,
            content
          })
        )
      }
    ),
    record ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ActionSheetRow2,
      {
        label: "Restore original timestamp",
        variant: "danger",
        onPress: closeAndRun(() => {
          void restoreOriginalTimestamp(context, channelId, id);
        })
      }
    ) : null
  ] });
}
function previewOf(message) {
  const author = isRecord(message.author) ? message.author : void 0;
  const globalName = typeof author?.globalName === "string" ? author.globalName.trim() : "";
  const username = typeof author?.username === "string" ? author.username.trim() : "";
  const raw = typeof message.content === "string" ? message.content.trim() : "";
  const content = raw.length > 400 ? `${raw.slice(0, 399).trimEnd()}\u2026` : raw;
  return {
    authorName: globalName || username || void 0,
    content: content || void 0
  };
}
function closeAndRun(action) {
  return () => {
    import_actions2.ActionSheetActionCreators.hideActionSheet();
    action();
  };
}
function appendToActionSheet(tree, group) {
  const sheet = findActionSheet(tree);
  if (!sheet?.props) return;
  const children = [sheet.props.children].flat().filter(Boolean);
  children.push(group);
  sheet.props.children = children;
}
function findActionSheet(element) {
  if (!element || typeof element !== "object") return void 0;
  if (Array.isArray(element)) {
    for (const child of element) {
      const found = findActionSheet(child);
      if (found) return found;
    }
    return void 0;
  }
  const candidate = element;
  if (candidate.type === ActionSheet2) return candidate;
  return findActionSheet(candidate.props?.children);
}

// plugins/local-timestamp-editor/js/storage.ts
var SchemaVersion = 1;
var MaxOverrides = 5e3;
var MaxOriginalTimestampLength = 40;
var MaxTimeZoneLength = 64;
function overrideKey(channelId, messageId) {
  return `${channelId}:${messageId}`;
}
function readWallClock(value) {
  if (!isRecord(value)) return void 0;
  const clock = {
    year: Number(value.year),
    month: Number(value.month),
    day: Number(value.day),
    hour: Number(value.hour),
    minute: Number(value.minute)
  };
  return validateWallClock(clock) ? void 0 : clock;
}
function readAmbiguous(value) {
  return value === "earlier" || value === "later" ? value : void 0;
}
function normaliseRecord(raw) {
  if (!isRecord(raw)) return void 0;
  if (!isSnowflake(raw.channelId) || !isSnowflake(raw.messageId))
    return void 0;
  if (!isValidEpochMs(raw.customTimestampMs)) return void 0;
  const originalTimestamp = raw.originalTimestamp;
  if (typeof originalTimestamp !== "string" || originalTimestamp.length > MaxOriginalTimestampLength || !Number.isFinite(Date.parse(originalTimestamp)))
    return void 0;
  const wallClock = readWallClock(raw.wallClock);
  if (!wallClock) return void 0;
  const timeZone = typeof raw.timeZone === "string" && raw.timeZone.length <= MaxTimeZoneLength ? raw.timeZone : deviceTimeZone();
  const created = raw.createdAtMs;
  const updated = raw.updatedAtMs;
  const record = {
    channelId: raw.channelId,
    messageId: raw.messageId,
    originalTimestamp,
    customTimestampMs: raw.customTimestampMs,
    wallClock,
    timeZone,
    createdAtMs: isValidEpochMs(created) ? created : raw.customTimestampMs,
    updatedAtMs: isValidEpochMs(updated) ? updated : raw.customTimestampMs
  };
  const ambiguous = readAmbiguous(raw.ambiguous);
  if (ambiguous) record.ambiguous = ambiguous;
  return record;
}
function instantFromLegacyTimestamp(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    const milliseconds = Math.abs(value) < 1e11 ? value * 1e3 : value;
    return isValidEpochMs(Math.round(milliseconds)) ? Math.round(milliseconds) : void 0;
  }
  if (typeof value === "string") {
    const parsed = Date.parse(value);
    return Number.isFinite(parsed) && isValidEpochMs(parsed) ? parsed : void 0;
  }
}
function migrateLegacyRecord(raw) {
  if (!isRecord(raw)) return void 0;
  if (!isSnowflake(raw.channelId) || !isSnowflake(raw.messageId))
    return void 0;
  const instant = instantFromLegacyTimestamp(raw.timestamp);
  if (instant === void 0) return void 0;
  const originalTimestamp = typeof raw.originalTimestamp === "string" && raw.originalTimestamp.length <= MaxOriginalTimestampLength && Number.isFinite(Date.parse(raw.originalTimestamp)) ? raw.originalTimestamp : new Date(instant).toISOString();
  return {
    channelId: raw.channelId,
    messageId: raw.messageId,
    originalTimestamp,
    customTimestampMs: instant,
    wallClock: wallClockAt(instant),
    timeZone: deviceTimeZone(),
    createdAtMs: instant,
    updatedAtMs: instant
  };
}
function readDocument(raw) {
  const empty = {
    document: { schemaVersion: SchemaVersion, overrides: {} },
    dropped: 0,
    unsupported: false
  };
  if (!isRecord(raw)) return empty;
  const version = Number.isInteger(raw.schemaVersion) ? raw.schemaVersion : 0;
  if (version > SchemaVersion) return { ...empty, unsupported: true };
  const source = isRecord(raw.overrides) ? raw.overrides : {};
  const overrides = {};
  let dropped = 0;
  let migrated = 0;
  for (const [key, value] of Object.entries(source)) {
    const record = version >= SchemaVersion ? normaliseRecord(value) : migrateLegacyRecord(value);
    if (!record || key !== overrideKey(record.channelId, record.messageId)) {
      dropped++;
      continue;
    }
    if (version < SchemaVersion) migrated++;
    overrides[key] = record;
  }
  return {
    document: { schemaVersion: SchemaVersion, overrides },
    dropped,
    // An untouched or empty document is not a migration, so it is not rewritten.
    migratedFrom: migrated > 0 ? version : void 0,
    unsupported: false
  };
}
function createOverrideStore(storage, events) {
  const records = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  let loaded = false;
  let readOnly = false;
  let dropped = 0;
  let migratedFrom;
  let writeFailures = 0;
  let lastWriteError;
  let writeChain = Promise.resolve();
  function snapshot() {
    const overrides = {};
    for (const key of [...records.keys()].sort())
      overrides[key] = records.get(key);
    return { schemaVersion: SchemaVersion, overrides };
  }
  function notify() {
    for (const listener of listeners) {
      try {
        listener();
      } catch (error) {
        events.onError("An override listener failed", error);
      }
    }
  }
  function persist() {
    if (readOnly) return Promise.resolve();
    writeChain = writeChain.then(async () => {
      try {
        await storage.set(snapshot(), true);
      } catch (error) {
        writeFailures++;
        lastWriteError = error instanceof Error ? error.message : String(error);
        events.onError("Failed to save timestamp overrides", error);
      }
    });
    return writeChain;
  }
  async function load() {
    let raw;
    try {
      raw = await storage.get();
    } catch (error) {
      loaded = true;
      events.onError("Failed to read stored timestamp overrides", error);
      return;
    }
    const result = readDocument(raw);
    readOnly = result.unsupported;
    dropped = result.dropped;
    migratedFrom = result.migratedFrom;
    if (readOnly) {
      events.onError(
        `Stored overrides use schema version ${raw.schemaVersion}, which is newer than this plugin supports. Editing is disabled so newer data is not overwritten.`
      );
      loaded = true;
      return;
    }
    for (const [key, record] of Object.entries(result.document.overrides))
      records.set(key, record);
    if (dropped)
      events.log(
        `Ignored ${dropped} unreadable stored override(s); the rest were loaded.`
      );
    loaded = true;
    if (migratedFrom !== void 0) {
      events.log(
        `Migrated overrides from schema version ${migratedFrom} to ${SchemaVersion}.`
      );
      await persist();
    }
  }
  return {
    get size() {
      return records.size;
    },
    get loaded() {
      return loaded;
    },
    get readOnly() {
      return readOnly;
    },
    diagnostics() {
      return {
        loaded,
        size: records.size,
        dropped,
        migratedFrom,
        readOnly,
        writeFailures,
        lastWriteError
      };
    },
    load,
    hasAny() {
      return records.size > 0;
    },
    lookup(channelId, messageId) {
      if (!isSnowflake(channelId) || !isSnowflake(messageId)) return void 0;
      return records.get(overrideKey(channelId, messageId));
    },
    list() {
      return [...records.values()].sort((a, b) => b.updatedAtMs - a.updatedAtMs);
    },
    async save(record) {
      if (readOnly) {
        events.onError("Overrides are read-only for this storage file.");
        return false;
      }
      const normalised = normaliseRecord(record);
      if (!normalised) {
        events.onError("Refused to save an invalid timestamp override.");
        return false;
      }
      const key = overrideKey(normalised.channelId, normalised.messageId);
      const existing = records.get(key);
      if (!existing && records.size >= MaxOverrides) {
        events.onError(
          `Cannot store more than ${MaxOverrides} overrides. Remove some first.`
        );
        return false;
      }
      const now = Date.now();
      records.set(key, {
        ...normalised,
        createdAtMs: existing?.createdAtMs ?? now,
        updatedAtMs: now
      });
      await persist();
      notify();
      return true;
    },
    async remove(channelId, messageId) {
      if (readOnly) return false;
      if (!records.delete(overrideKey(channelId, messageId))) return false;
      await persist();
      notify();
      return true;
    },
    async removeAll() {
      if (readOnly || records.size === 0) return false;
      const removed = records.size;
      records.clear();
      await persist();
      notify();
      events.log(`Removed ${removed} stored override(s).`);
      return true;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    flush() {
      return writeChain;
    }
  };
}

// plugins/local-timestamp-editor/js/ui/settings.tsx
var import_actions3 = __toESM(require_actions(), 1);
var import_design3 = __toESM(require_design(), 1);
var import_react_native_clipboard = __toESM(require_react_native_clipboard(), 1);
var import_react3 = __toESM(require_revenge_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var {
  AlertActionButton,
  AlertModal,
  Stack: Stack2,
  TableRadioGroup,
  TableRadioRow,
  TableRow,
  TableRowGroup,
  TableSwitchRow,
  Text: Text2,
  TextInput: TextInput2
} = import_design3.Design;
var MaxListedOverrides = 50;
function SettingsComponent({
  api
}) {
  const context = pluginContext();
  if (!context) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SettingsPanel, { api, context });
}
function confirm(key, title, content, confirmText, onConfirm) {
  import_actions3.AlertActionCreators.openAlert(
    key,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      AlertModal,
      {
        title,
        content,
        actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            AlertActionButton,
            {
              text: "Cancel",
              variant: "secondary",
              onPress: () => import_actions3.AlertActionCreators.dismissAlert(key)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            AlertActionButton,
            {
              text: confirmText,
              variant: "destructive",
              onPress: () => {
                import_actions3.AlertActionCreators.dismissAlert(key);
                onConfirm();
              }
            }
          )
        ] })
      }
    )
  );
}
function SettingsPanel({
  api,
  context
}) {
  const stored = api.jsonStorage.use();
  const settings = normaliseSettings(stored);
  const [, setRevision] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(
    () => context.store.subscribe(() => setRevision((value) => value + 1)),
    [context]
  );
  const overrides = context.store.list();
  const patternError = settings.preset === "custom" ? validatePattern(settings.pattern) : void 0;
  const diagnostics = context.store.diagnostics();
  async function removeAll() {
    const removed = await context.store.removeAll();
    context.toast(
      removed ? "All overrides removed." : "There were no overrides to remove.",
      removed ? "success" : "default"
    );
  }
  function exportOverrides() {
    try {
      import_react_native_clipboard.Clipboard.setString(
        JSON.stringify(
          {
            schemaVersion: SchemaVersion,
            exportedAtMs: Date.now(),
            overrides: context.store.list()
          },
          void 0,
          2
        )
      );
      context.toast("Overrides copied as JSON.", "success");
    } catch (error) {
      context.error("Failed to copy the overrides", error);
      context.toast("The overrides could not be copied.", "critical");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      TableRadioGroup,
      {
        title: "Display format",
        description: "How an overridden timestamp is written.",
        value: settings.preset,
        onChange: (value) => api.jsonStorage.set({ preset: value }),
        children: FormatPresets.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          TableRadioRow,
          {
            label: PresetLabels[preset],
            value: preset
          },
          preset
        ))
      }
    ),
    settings.preset === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(TableRowGroup, { title: "Custom pattern", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TextInput2,
        {
          label: "Pattern",
          value: settings.pattern,
          onChange: (pattern) => api.jsonStorage.set({ pattern }),
          errorMessage: patternError,
          status: patternError ? "error" : void 0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: SupportedTokens.join(" "),
          subLabel: "Tokens are replaced with the matching part of the timestamp. Anything else must be a non-letter character."
        }
      )
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      TableRowGroup,
      {
        title: "Behaviour",
        description: "Applied the next time the affected message is drawn.",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableSwitchRow,
            {
              label: "Keep the saved wall clock",
              subLabel: "Show exactly the date and time you chose even if the device time zone changes. When off, the saved instant follows the device time zone, like Discord's own timestamps.",
              value: settings.keepSavedWallClock,
              onValueChange: (value) => api.jsonStorage.set({ keepSavedWallClock: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableSwitchRow,
            {
              label: "Move messages",
              subLabel: "Sort the chat list by the dates you chose, so an overridden message sits above the messages it now belongs with. The list is redrawn the next time you open the channel.",
              value: settings.moveMessages,
              onValueChange: (value) => api.jsonStorage.set({ moveMessages: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableSwitchRow,
            {
              label: "Apply to message rows",
              subLabel: "Replace the timestamp on the generated message row.",
              value: settings.applyToMessageRows,
              onValueChange: (value) => api.jsonStorage.set({ applyToMessageRows: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableSwitchRow,
            {
              label: "Apply to rendered message props",
              subLabel: "Fallback for surfaces outside the message list. Turn this off if another plugin or a Discord surface reacts badly to it.",
              value: settings.applyToPropsRenderingMessages,
              onValueChange: (value) => api.jsonStorage.set({ applyToPropsRenderingMessages: value })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      TableRowGroup,
      {
        title: "Overrides",
        description: overrides.length ? `${overrides.length} message(s) show a custom date and time.` : "No message currently shows a custom date and time.",
        children: [
          overrides.slice(0, MaxListedOverrides).map((record) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableRow,
            {
              label: displayText(record, settings),
              subLabel: `Original ${describeOriginal(record, settings)} \xB7 ${displayZoneLabel(record, settings)}`,
              labelLineClamp: 2,
              subLabelLineClamp: 2,
              arrow: true,
              onPress: () => openTimestampEditor({
                channelId: record.channelId,
                messageId: record.messageId,
                originalTimestamp: record.originalTimestamp
              })
            },
            `${record.channelId}:${record.messageId}`
          )),
          overrides.length > MaxListedOverrides ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableRow,
            {
              label: `${overrides.length - MaxListedOverrides} more override(s)`,
              subLabel: `Only the ${MaxListedOverrides} most recently changed overrides are listed.`
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableRow,
            {
              label: "Copy overrides as JSON",
              subLabel: "Copies the stored overrides to the clipboard for your own backup.",
              onPress: exportOverrides,
              disabled: !overrides.length
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TableRow,
            {
              label: "Remove all overrides",
              subLabel: "Restores the original timestamps for every overridden message.",
              variant: "danger",
              disabled: !overrides.length || context.store.readOnly,
              onPress: () => confirm(
                "local-timestamp-editor:remove-all",
                "Remove all overrides?",
                `${overrides.length} message(s) will go back to showing Discord's original timestamp. This cannot be undone.`,
                "Remove all",
                () => void removeAll()
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(TableRowGroup, { title: "Status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: "Message row hook",
          subLabel: context.display.rowPatched ? "Active" : "Not found in this Discord build. The rendered props fallback is used instead."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: "Rendered props hooks",
          subLabel: `${context.display.propsHooks} of 3 active (jsx, jsxs, createElement).`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: "Overrides applied",
          subLabel: `${context.stats.rowOverrides} on message rows, ${context.stats.propsOverrides} on rendered props, ${context.stats.listReorders} list move(s).`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: "Storage",
          subLabel: `Schema ${SchemaVersion}, ${diagnostics.size} record(s)${diagnostics.dropped ? `, ${diagnostics.dropped} ignored` : ""}${diagnostics.writeFailures ? `, ${diagnostics.writeFailures} failed write(s)` : ""}.`
        }
      ),
      context.stats.lastFailure ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        TableRow,
        {
          label: "Last problem",
          subLabel: context.stats.lastFailure,
          variant: "danger"
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        Stack2,
        {
          spacing: 4,
          style: { paddingHorizontal: 16, paddingVertical: 8 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text2, { color: "text-muted", variant: "text-xs/medium", children: `Plugin version ${context.version}.` }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text2, { color: "text-muted", variant: "text-xs/medium", children: `A message that does not update immediately is drawn again when you scroll it out of view and back, or when you reopen the channel.` })
          ]
        }
      )
    ] })
  ] });
}

// plugins/local-timestamp-editor/js/index.tsx
var ToastKey = "local-timestamp-editor:toast";
var index_default = plugin({
  jsonStorage: { load: true, default: DefaultSettings },
  async start(api) {
    const { cleanup, jsonStorage, plugin: plugin2 } = api;
    const logger = new import_logger.Logger("LocalTimestampEditor");
    const overrides = (0, import_json_storage.getJsonStorage)(
      (0, import_json_storage.pluginStoragePathFor)(plugin2.manifest.id, "overrides.json"),
      { load: true, default: { schemaVersion: SchemaVersion, overrides: {} } }
    );
    const store = createOverrideStore(overrides, {
      log: (message) => logger.log(message),
      onError: (message, detail) => {
        logger.error(message, detail);
        plugin2.reportError(detail ?? message);
      }
    });
    const stats = createRenderStats();
    const currentSettings = () => normaliseSettings(jsonStorage.cache);
    const display = bindDisplayOverrides({
      source: store,
      stats,
      rowStrategyEnabled: () => currentSettings().applyToMessageRows,
      propsStrategyEnabled: () => currentSettings().applyToPropsRenderingMessages,
      reorderEnabled: () => currentSettings().moveMessages,
      onError: (message, error) => {
        logger.error(message, error);
        plugin2.reportError(error ?? message);
      }
    });
    const context = {
      store,
      storage: jsonStorage,
      stats,
      display,
      version: (0, import_utils.formatVersion)(plugin2.manifest.version),
      log: (message) => logger.log(message),
      error: (message, detail) => {
        logger.error(message, detail);
        plugin2.reportError(detail ?? message);
      },
      toast: (text, variant) => import_actions4.ToastActionCreators.open(ToastKey, { text, variant })
    };
    cleanup(
      () => setPluginContext(void 0),
      () => display.release(),
      bindMessageMenu({
        onError: (message, error) => {
          logger.error(message, error);
          plugin2.reportError(error ?? message);
        }
      })
    );
    setPluginContext(context);
    await store.load();
    if (plugin2.startedLate)
      logger.log(
        "Started after the initial startup sequence; the message menu is available now and overrides take effect on the next render."
      );
    logger.log(
      `Loaded with ${store.size} override(s); message row hook ${display.rowPatched ? "active" : "unavailable"}, ${display.propsHooks} of 3 prop hooks active.`
    );
  },
  stop() {
    setPluginContext(void 0);
  },
  SettingsComponent
});
export {
  index_default as default
};
