/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/A6HS4HYj8cN
 */
import Link from "next/link"

export function MojiLand() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid gap-4">
        <h1 className="text-3xl font-bold">Moji.land</h1>
        <p className="text-sm text-gray-500">
          Join the waitlist by clicking the following button that opens up a tally.so form. 
        </p>
        <Link
          className="inline-flex items-center h-10 px-4 text-center text-sm font-medium rounded-md bg-gray-900 text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
          href="https://tally.so/r/mBXJN4"
        >
          Join waitlist
        </Link>
      </div>
    </div>
  )
}