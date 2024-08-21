import {
  require_react
} from "./chunk-WIS7EYSQ.js";
import {
  __commonJS
} from "./chunk-LNEMQRCO.js";

// node_modules/.pnpm/react-fade-in@2.0.1_react@18.3.1/node_modules/react-fade-in/lib/FadeIn.js
var require_FadeIn = __commonJS({
  "node_modules/.pnpm/react-fade-in@2.0.1_react@18.3.1/node_modules/react-fade-in/lib/FadeIn.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importStar(require_react());
    function FadeIn(props) {
      var _a = react_1.useState(0), maxIsVisible = _a[0], setMaxIsVisible = _a[1];
      var transitionDuration = props.transitionDuration || 400;
      var delay = props.delay || 50;
      var WrapperTag = props.wrapperTag || "div";
      var ChildTag = props.childTag || "div";
      var visible = typeof props.visible === "undefined" ? true : props.visible;
      react_1.useEffect(function() {
        var count = react_1.default.Children.count(props.children);
        if (!visible) {
          count = 0;
        }
        if (count == maxIsVisible) {
          var timeout_1 = setTimeout(function() {
            if (props.onComplete)
              props.onComplete();
          }, transitionDuration);
          return function() {
            return clearTimeout(timeout_1);
          };
        }
        var increment = count > maxIsVisible ? 1 : -1;
        var timeout = setTimeout(function() {
          setMaxIsVisible(maxIsVisible + increment);
        }, delay);
        return function() {
          return clearTimeout(timeout);
        };
      }, [
        react_1.default.Children.count(props.children),
        delay,
        maxIsVisible,
        visible,
        transitionDuration
      ]);
      return react_1.default.createElement(WrapperTag, { className: props.className }, react_1.default.Children.map(props.children, function(child, i) {
        return react_1.default.createElement(ChildTag, { className: props.childClassName, style: {
          transition: "opacity " + transitionDuration + "ms, transform " + transitionDuration + "ms",
          transform: maxIsVisible > i ? "none" : "translateY(20px)",
          opacity: maxIsVisible > i ? 1 : 0
        } }, child);
      }));
    }
    exports.default = FadeIn;
  }
});
export default require_FadeIn();
//# sourceMappingURL=react-fade-in_lib_FadeIn.js.map
