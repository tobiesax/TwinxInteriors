"use client";

import { useActionState } from "react";
import { submitQuoteRequest, type SubmitQuoteState } from "@/app/contact/actions";

const pvcColors = [
  "Black W61",
  "Marble W78",
  "Blue W75",
  "Charcoal W73",
  "Light Grey W62",
  "Oak Brown W34",
  "Plain Black WT041",
  "Dark Walnut WT112",
  "Charcoal WT115",
  "Light Grey WT114",
  "Oak Brown WT130",
  "Black Marble WT164",
  "Cream WT082",
  "Light Brown WT061",
];

const wallpaperCodes = [
  "09C9702", "09C9701", "09C9703", "11C1001", "15C9002", "15C9003", "16C1101", "16C8002",
  "16C7005", "16C7001", "16C3004", "09C9901", "16C7003", "16C8001", "16C9005", "16C9006",
];

const inputClasses =
  "rounded-[3px] border border-black/[0.14] bg-white px-4 py-3.5 font-poppins text-sm text-ink placeholder:text-muted-2 focus:border-brand focus:outline-none";

const checkboxLabelClasses = "flex cursor-pointer items-center gap-2.5 text-sm text-ink";

const initialState: SubmitQuoteState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitQuoteRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="flex h-fit flex-col gap-4 rounded-[3px] border border-black/[0.06] bg-cream-2 p-10">
        <div className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Thank You</div>
        <h3 className="m-0 font-jost text-2xl font-light uppercase text-ink">We&apos;ve got your brief.</h3>
        <p className="m-0 text-sm leading-[1.7] text-muted">
          Thanks for reaching out — one of Twinx team will be in touch shortly with a quote and timeline for your
          space.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex h-fit flex-col gap-7 rounded-[3px] border border-black/[0.06] bg-cream-2 p-10">
      <div className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Request a Quote</div>

      {state.status === "error" && state.message && (
        <div className="rounded-[3px] border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-brand">
          {state.message}
        </div>
      )}

      <div>
        <div className="mb-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Name</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="firstName" required placeholder="First" className={inputClasses} />
          <input name="lastName" placeholder="Last" className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="phone" required placeholder="Phone" className={inputClasses} />
        <input name="email" placeholder="Email" type="email" className={inputClasses} />
      </div>

      <div>
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-brand">What Are You Looking For?</div>
        <div className="flex flex-col gap-[18px]">
          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">Wall Designs</div>
            <div className="flex flex-col gap-2.5 pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input type="checkbox" name="wallDesignOptions" value="Wall Frame Moulding" className="h-[15px] w-[15px] accent-brand" />{" "}
                Wall Frame Moulding
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input type="checkbox" name="wallDesignOptions" value="Accent Walls" className="h-[15px] w-[15px] accent-brand" />{" "}
                Accent Walls
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">Kitchen Units</div>
            <div className="flex flex-col gap-2.5 pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Kitchen Units — Existing Kitchen Redesign"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Existing Kitchen Redesign
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Kitchen Units — New Kitchen, Fresh Start"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                New Kitchen, Fresh Start
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">Walk-In Closet</div>
            <div className="flex flex-col gap-2.5 pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Walk-In Closet — Existing Closet Redesign"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Existing Closet Redesign
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Walk-In Closet — New Closet, Fresh Start"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                New Closet, Fresh Start
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">TV Unit</div>
            <div className="flex flex-col gap-2.5 pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="TV Unit — Existing TV Unit Redesign"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Existing TV Unit Redesign
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="TV Unit — New TV Unit, Fresh Start"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                New TV Unit, Fresh Start
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">BIC (Built-In Cabinet)</div>
            <div className="flex flex-col gap-2.5 pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="BIC — Existing BIC Redesign"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Existing BIC Redesign
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="BIC — New BIC, Fresh Start"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                New BIC, Fresh Start
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">Custom Cabinetry Unit</div>
            <div className="pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Custom Cabinetry Unit — Custom Design"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Custom Design
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">PVC Wall Panels</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pl-1">
              {pvcColors.map((c) => (
                <label key={c} className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                  <input type="checkbox" name="wallDesignOptions" value={`PVC — ${c}`} className="h-[15px] w-[15px] accent-brand" />{" "}
                  {c}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">Wallpaper</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pl-1 sm:grid-cols-3">
              {wallpaperCodes.map((code, i) => (
                <label key={`${code}-${i}`} className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                  <input
                    type="checkbox"
                    name="wallDesignOptions"
                    value={`Wallpaper — ${code}`}
                    className="h-[15px] w-[15px] accent-brand"
                  />{" "}
                  {code}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-sm font-bold text-ink">PU Stone</div>
            <div className="pl-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-[#4A4640]">
                <input
                  type="checkbox"
                  name="wallDesignOptions"
                  value="Black PU Stone"
                  className="h-[15px] w-[15px] accent-brand"
                />{" "}
                Black PU Stone
              </label>
            </div>
          </div>
        </div>
      </div>

      <input name="wallSize" placeholder="Wall size (Height x Width)" className={inputClasses} />
      <textarea
        name="description"
        placeholder="Give us a brief description of what you want done"
        rows={4}
        className={`${inputClasses} resize-y`}
      />
      <input name="address" placeholder="Installation address" className={inputClasses} />
      <input
        type="text"
        name="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer rounded-[3px] border-none bg-brand px-[34px] py-4 font-jost text-[15px] font-bold text-white transition-colors duration-200 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
