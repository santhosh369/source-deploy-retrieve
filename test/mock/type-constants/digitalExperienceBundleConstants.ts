/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { join } from 'path';
import { registry, SourceComponent } from '../../../src';
import { META_XML_SUFFIX, META_JSON_FILE } from '../../../src/common';

export const DE_TYPE = registry.types.digitalexperiencebundle.children.types.digitalexperience;
export const DEB_TYPE = registry.types.digitalexperiencebundle;

export const BUNDLE_NAME = join('site', 'foo');
export const BUNDLE_FULL_NAME = BUNDLE_NAME;

export const HOME_VIEW_NAME = join('sfdc_cms__view', 'home');
export const HOME_VIEW_FULL_NAME = `${BUNDLE_FULL_NAME}.${HOME_VIEW_NAME}`;

export const BUNDLE_META_FILE = `foo.${registry.types.digitalexperiencebundle.suffix}${META_XML_SUFFIX}`;
export const HOME_VIEW_CONTENT_FILE = 'content.json';
export const HOME_VIEW_META_FILE = META_JSON_FILE;

export const BASE_PATH = join('path', 'to', registry.types.digitalexperiencebundle.directoryName);
export const BUNDLE_PATH = join(BASE_PATH, BUNDLE_NAME);
export const BUNDLE_META_FILE_PATH = join(
  BUNDLE_PATH,
  `foo.${registry.types.digitalexperiencebundle.suffix}${META_XML_SUFFIX}`
);
export const HOME_VIEW_PATH = join(BUNDLE_PATH, HOME_VIEW_NAME);
export const HOME_VIEW_CONTENT_FILE_PATH = join(HOME_VIEW_PATH, HOME_VIEW_CONTENT_FILE);

export const DEB_COMPONENT = SourceComponent.createVirtualComponent(
  {
    name: BUNDLE_NAME,
    type: DEB_TYPE,
    xml: BUNDLE_META_FILE_PATH,
  },
  [
    {
      dirPath: BUNDLE_PATH,
      children: [BUNDLE_META_FILE],
    },
  ]
);

export const DE_COMPONENT = SourceComponent.createVirtualComponent(
  {
    name: HOME_VIEW_NAME,
    type: DE_TYPE,
    content: HOME_VIEW_CONTENT_FILE_PATH,
    parent: DEB_COMPONENT,
    parentType: DEB_TYPE,
  },
  [
    {
      dirPath: HOME_VIEW_PATH,
      children: [HOME_VIEW_CONTENT_FILE, HOME_VIEW_META_FILE],
    },
  ]
);
