import * as React from "react";
import { classNames } from "./utils/className";

interface TabsProps {
  content?: React.ReactNode;
  tabs?: any;
}

export default class Tabs extends React.Component<TabsProps> {
  state = {
    currentTab: "General",
    content: this.props.content,
    tabs: this.props.tabs,
  };

  handleSwitch = (input: any, content: any) => (e: any) => {
    e.preventDefault();
    this.state.tabs.forEach((tab: any) => {
      tab.current = false;
    });
    this.state.tabs.find((tab: any) => tab.name == input)!.current = true;
    this.setState({ currentTab: input, content: content });
  };

  render() {
    return (
      <>
        <div className='lg:hidden mt-4'>
          <label htmlFor='selected-tab' className='sr-only'>
            Select a tab
          </label>
          <select
            id='selected-tab'
            name='selected-tab'
            className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm'
            defaultValue={this.state.tabs.find((tab: any) => tab.current)?.name}
          >
            {this.state.tabs.map((tab: any) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className='hidden lg:block'>
          <div className='border-b border-gray-200'>
            <nav className='-mb-px flex space-x-8'>
              {this.state.tabs.map((tab: any) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  onClick={this.handleSwitch(tab.name, tab.content)}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {this.state.content}
      </>
    );
  }
}
